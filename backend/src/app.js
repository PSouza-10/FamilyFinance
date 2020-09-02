const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

class App {
  constructor() {
    this.express = express()
    this.middlewares()
    // this.database()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json({ limit: '50mb' }))
    this.express.use(cors())
  }

  //   database() {
  //     mongoose.connect(config.get('Database'), {
  //       useFindAndModify: false,
  //       useUnifiedTopology: true,
  //       useCreateIndex: true,
  //       useNewUrlParser: true
  //     })
  //   }

  routes() {
    this.express.use(routes)
  }
}

module.exports = new App().express
