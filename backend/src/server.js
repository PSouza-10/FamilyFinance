const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cloudinary = require('cloudinary').v2

const { API_KEY, API_SECRET, CLOUD_NAME } = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})
app.listen(PORT, () => console.log(`Servidor inicializado na Porta ${PORT}`))
