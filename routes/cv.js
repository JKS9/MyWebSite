const express = require('express')
const route = express.Router()

route.get('/', async function(req, res, next) {
    res.render('pages/cv')
})

module.exports = route
