const Transaction = require('../models/Transaction')

const cloudinary = require('cloudinary').v2

module.exports = {
  async index(req, res) {
    const transactions = await Transaction.find()
    if (transactions === []) {
      return res.status(404).send('Nenhuma transação encontrada')
    }
    return res.send(transactions)
  },
  async add(req, res) {
    const { type, member, date, description, image, value } = req.body

    if (!type || !member || !date || !value) {
      return res
        .status(400)
        .send('Erro de Validação: Preencha os campos necessários')
    } else {
      const dateString = await returnReadableDate(date)
      const { public_id, imageSrc } = await uploadToCloudinary(image)

      const response = await Transaction.create({
        type,
        member,
        value,
        description,
        date: dateString,
        imageSrc,
        public_id
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

    if (newImage) {
      const { new_id, url } = await changeCloudinaryImage(newImage, public_id)

      public_id = new_id
      imageSrc = url
    }

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
  if (base64Img) {
    try {
      const { public_id, url } = await cloudinary.uploader.upload(base64Img, {})

      return {
        public_id,
        imageSrc: url
      }
    } catch (error) {
      console.log('error on cloudinary upload')
    }
  }
}

const changeCloudinaryImage = async (base64Img, previousImg_id) => {
  try {
    await cloudinary.uploader.destroy(previousImg_id)
    const { public_id, url } = await cloudinary.uploader.upload(base64Img, {})

    return {
      new_id: public_id,
      url
    }
  } catch (error) {
    console.log('error on cloudinary change')
  }
}
