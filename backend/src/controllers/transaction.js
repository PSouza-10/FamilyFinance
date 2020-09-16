const Transaction = require('../models/Transaction')
const { uploadImage, deleteImage } = require('../utils/image')
const { returnReadableDate } = require('../utils/date')

module.exports = {
  async index(req, res) {
    const transactions = await Transaction.find()
    console.log('GET route')
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

      let imageData = {}
      if (image) {
        imageData = await uploadImage(image)
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
    let { imageSrc, date, public_id, newImage } = req.body

    const old = await Transaction.findById(req.params._id)

    if (old.date !== date) {
      date = await returnReadableDate(date)
    }

    let imageData = {
      public_id,
      imageSrc
    }

    if (newImage) {
      await deleteImage(public_id)
      imageData = await uploadImage(newImage)
    }

    const newTransaction = await Transaction.findOneAndUpdate(
      { _id: req.params._id },
      {
        ...req.body,
        ...imageData,
        date
      },
      { new: true }
    )

    return res.send(newTransaction)
  },
  async delete(req, res) {
    const _id = req.params._id
    if (!_id) {
      return res.status(400).send('Erro ao deletar: identificador vazio')
    } else {
      const response = await Transaction.findByIdAndDelete(_id)
      if (response.public_id) {
        await deleteImage(response.public_id)
      }
      return res.send(response._id)
    }
  }
}
