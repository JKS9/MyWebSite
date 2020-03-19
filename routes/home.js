const express = require('express')
const route = express.Router()

route.get('/', async function(req, res, next) {
    res.render('pages/home', {
        meta: "etienne"
    })
})

module.exports = route
