const { BAD_REQUEST, CREATED, NO_CONTENT } = require('http-status-codes')
const { User } = require('../models/User')

class UserController {
  async list(req, res) {
    let { page, size } = req.query
    if (!page) page = 1
    if (!size) size = 10

    const pageNumber = page - 1

    try {
      const users = await User.query().select('users.*').page(pageNumber, size)
      return res.json(users)
    } catch (error) {
      return res.status(BAD_REQUEST).json(error)
    }
  }

  async show(req, res) {
    const { id } = req.params

    try {
      const user = await User.query().findById(id)
      return res.json(user)
    } catch (error) {
      return res.status(BAD_REQUEST).json(error)
    }
  }

  async create(req, res) {
    const { name, email, password } = req.body

    if (!name || !email || !password) return res.status(BAD_REQUEST).json({ error: 'missing required fields' })

    try {
      const userExists = await User.query().findOne({ email })
      if (userExists) return res.status(BAD_REQUEST).json({ error: 'this is e-mail is already in use by someone' })

      const user = await User.query().insert({ name, email, password }).returning('*')
      return res.status(CREATED).json(user)
    } catch (error) {
      return res.status(BAD_REQUEST).json(error)
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      await User.query().deleteById(id)
      return res.sendStatus(NO_CONTENT)
    } catch (error) {
      return res.status(BAD_REQUEST).json(error)
    }
  }
}

module.exports = new UserController()
