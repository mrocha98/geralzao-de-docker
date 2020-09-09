require('dotenv').config()
const path = require('path')
const { PG_HOST, PG_NAME, PG_USER, PG_PASS, PG_PORT } = process.env

const connection = {
  host: PG_HOST,
  database: PG_NAME,
  user: PG_USER,
  password: PG_PASS,
  port: PG_PORT
}

module.exports = {
  client: 'pg',
  version: '12',
  searchPath: ['knex', 'public'],
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  connection
}
