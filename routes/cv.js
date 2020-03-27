const express = require('express')
const route = express.Router()

route.get('/', async function(req, res, next) {
    const newDate = new Date()
    res.render('pages/cv', {
        years: newDate.getFullYear()
    })
})

module.exports = route
