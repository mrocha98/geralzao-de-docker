const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

class App {
  constructor() {
    this.express = express()

    this._middlewares()
    this._routes()
  }

  _middlewares() {
    this.express.use(express.json())
    this.express.use(helmet())
    this.express.use(morgan('dev'))
    this.express.use(cors())
  }

  _routes() {
    this.express.use(routes)
  }
}

module.exports = new App()
