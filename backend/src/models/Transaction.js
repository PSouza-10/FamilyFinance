const { model } = require('mongoose')

const Schema = require('mongoose').Schema

const TransactionSchema = new Schema(
  {
    type: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    member: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: false,
      default: 'https://icon-icons.com/icons2/403/PNG/512/cash_40532.png'
    },
    description: {
      type: String
    },
    value: {
      type: Number,
      required: true
    },
    public_id: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Transaction', TransactionSchema)
