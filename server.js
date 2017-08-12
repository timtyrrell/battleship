// call the packages we need
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const routes = require('./app/game')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

// ROUTING
const router = express.Router()

router.post('/', (req, res) => {
  routes.create(req, res)
})

router.put('/', (req, res) => {
  routes.update(req, res)
})

// Define all of our ROUTES
app.use('/battleship', router)

app.listen(port)
console.log('Server started on port ' + port)

module.exports = app
