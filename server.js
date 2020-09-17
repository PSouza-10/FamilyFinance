const app = require('./backend/src/app')
require('dotenv').config()
const https = require('https')
const fs = require('fs')
const PORT = process.env.PORT || 5000
const cloudinary = require('cloudinary').v2

const { API_KEY, API_SECRET, CLOUD_NAME } = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

const sslKey = fs.readFileSync('frontend/key.pem')
const sslCert = fs.readFileSync('frontend/cert.pem')


const credentials ={
  key : sslKey,
  cert: sslCert
}

const server = https.createServer(credentials,app)

server.listen(PORT, () => console.log(`Servidor HTTPS inicializado na Porta ${PORT}`))
