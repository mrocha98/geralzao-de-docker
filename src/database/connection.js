import knex from 'knex'

const { PG_HOST, PG_NAME, PG_USER, PG_PASS, PG_PORT } = process.env

const connection = knex({
  client: 'pg',
  version: '12',
  searchPath: ['knex', 'public'],
  debug: true,
  connection: {
    host: PG_HOST,
    database: PG_NAME,
    user: PG_USER,
    password: PG_PASS,
    port: PG_PORT
  }
})

module.exports = connection
