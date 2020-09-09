const { express } = require('./app')
const connection = require('./database/connection')
const { SERVER_PORT } = process.env

async function testConnection() {
  console.log('testing connection with database...')
  try {
    await connection.raw('select 1 + 1')
    console.log('connected!')
  } catch (error) {
    console.log('something went wrong...', error)
    process.exit(1)
  }
}

;(async () => {
  await testConnection()
  express.listen(SERVER_PORT, () => console.log(`server listen on ${SERVER_PORT}`))
})()
