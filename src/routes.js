const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.get('/users', UserController.list)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)

module.exports = routes
