const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()

class App {
  constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json({ limit: '50mb' }))
    this.express.use(cors())
  }

  database() {
    mongoose
      .connect(process.env.DATABASE, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
      })
      .then(console.log('MongoDB connected'))
  }

  routes() {
    this.express.use(routes)
  }
}

module.exports = new App().express
