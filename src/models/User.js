const { Model } = require('objection')
const connection = require('../database/connection')

Model.knex(connection)

class User extends Model {
  static get tableName() {
    return 'users'
  }
}

module.exports = {
  User
}
