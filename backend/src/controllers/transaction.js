const Transaction = require('../models/Transaction')

const cloudinary = require('cloudinary').v2

module.exports = {
  async index(req, res) {
    const transactions = await Transaction.find()
    if (transactions === []) {
      return res.status(404).send('Nenhuma transação encontrada')
    }

    return res.json(transactions)
  },
  async add(req, res) {
    const { type, member, date, description, image, value } = req.body

    if (!type || !member || !date || !value) {
      return res
        .status(400)
        .send('Erro de Validação: Preencha os campos necessários')
    } else {
      const dateString = await returnReadableDate(date)
      let imageData = {
        public_id: null,
        imageSrc: undefined
      }
      if (image) {
        imageData = await uploadToCloudinary(image)
      }

      const response = await Transaction.create({
        ...imageData,

        type,
        member,
        value,
        description,
        date: dateString
      })

      return res.send(response)
    }
  },
  async edit(req, res) {
    let {
      value,
      type,
      member,
      description,
      imageSrc,
      date,
      public_id,
      newImage
    } = req.body

    const old = await Transaction.findById(req.params._id)
    if (old.date !== date) {
      date = await returnReadableDate(date)
    }
    let imageData = {
      public_id: null,
      imageSrc: undefined
    }
    if (newImage) {
      imageData = await changeCloudinaryImage(newImage, public_id)
    }

    public_id = imageData.public_id
    imageSrc = imageData.imageSrc

    const newTransaction = await Transaction.findOneAndUpdate(
      { _id: req.params._id },
      {
        value,
        type,
        date,
        member,
        description,
        imageSrc,
        public_id
      },
      { new: true }
    )

    return res.send(newTransaction)
  },
  async delete(req, res) {
    const _id = req.params._id

    const response = await Transaction.findByIdAndDelete(_id)
    if (response.public_id) {
      await cloudinary.uploader.destroy(response.public_id)
    }
    return res.send(response._id)
  }
}

const returnReadableDate = async date => {
  const parsedDate = new Date(date)
  const dateString = parsedDate.toLocaleDateString('pt-BR', {
    dateStyle: 'short'
  })
  const timeString = parsedDate.toLocaleTimeString('pt-BR', {
    timeStyle: 'short'
  })
  const nums = dateString.split('-').reverse().join('/')

  return `${nums} ${timeString}`
}

const uploadToCloudinary = async base64Img => {
  try {
    const { public_id, url } = await cloudinary.uploader.upload(base64Img, {})

    return {
      public_id,
      imageSrc: url
    }
  } catch (error) {
    console.log('error on cloudinary upload')
    return {
      public_id: '',
      imageSrc: ''
    }
  }
}

const changeCloudinaryImage = async (base64Img, previousImg_id = null) => {
  try {
    if (previousImg_id) {
      await cloudinary.uploader.destroy(previousImg_id)
    }
    const { public_id, url } = await cloudinary.uploader.upload(base64Img, {})

    return {
      public_id,
      imageSrc: url
    }
  } catch (error) {
    console.log('error on cloudinary upload')
    return {
      public_id: '',
      imageSrc: ''
    }
  }
}
