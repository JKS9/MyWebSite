const express = require('express')
const route = express.Router()

route.get('/', async function(req, res, next) {
    res.render('pages/service', {
        meta: "etienne"
    })
})

module.exports = route