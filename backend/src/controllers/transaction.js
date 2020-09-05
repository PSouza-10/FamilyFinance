const Transaction = require('../models/Transaction')

const cloudinary = require('cloudinary').v2

module.exports = {
  async upload(req, res) {},
  async index(req, res) {
    const transactions = await Transaction.find()

    return res.send(transactions)
  },
  async add(req, res) {
    const { type, member, date, description, image, value } = req.body
    console.log({ type, member, date, description, value })
    if (!type || !member || !date || !value) {
      return res
        .status(400)
        .send('Erro de Validação: Preencha os campos necessários')
    } else {
      const dateString = await returnReadableDate(date)
      const imageSrc = await uploadToCloudify(image)

      const response = await Transaction.create({
        type,
        member,
        value,
        description,
        date: dateString,
        imageSrc
      })

      return res.send(response)
    }
  },
  // async edit(req, res) {},
  async delete(req, res) {
    const _id = req.params._id

    const response = await Transaction.findByIdAndDelete(_id)

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

const uploadToCloudify = async base64Img => {
  if (base64Img) {
    try {
      const uploadResponse = await cloudinary.uploader.upload(base64Img, {})

      return uploadResponse.url
    } catch (error) {
      console.log('error on cloudify upload')
    }
  }
}
