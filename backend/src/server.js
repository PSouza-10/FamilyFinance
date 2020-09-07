const app = require('./app')
const express = require('express')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cloudinary = require('cloudinary').v2

const { API_KEY, API_SECRET, CLOUD_NAME } = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../frontend/build')))

  app.get('*', (req, res) => {
    console.log(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    )
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    )
  })
}

app.listen(PORT, () => console.log(`Servidor inicializado na Porta ${PORT}`))
