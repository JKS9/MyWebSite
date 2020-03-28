const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')
const router = require('./routes/routes')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

router(app)

const server = http.createServer(app)
server.listen(3030, () => {
    console.log('serveur en route ! bonjour Etienne')
})