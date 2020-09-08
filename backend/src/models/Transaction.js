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
      default:
        'https://res.cloudinary.com/souzacloud/image/upload/v1599507362/256x256_igdsbl.png'
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
