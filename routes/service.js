const express = require('express')
const route = express.Router()

route.get('/', async function(req, res, next) {
    res.render('pages/service', {
        meta: "etienne"
    })
})

route.get('/web', async function(req, res, next) {
  res.render('pages/serviceweb', {
      meta: "etienne"
  })
})

route.get('/app', async function(req, res, next) {
  res.render('pages/serviceapp', {
      meta: "etienne"
  })
})

module.exports = route