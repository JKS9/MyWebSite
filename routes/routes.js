

const home = require('./home.js')
const cv = require('./cv.js')
const service = require('./service.js')

module.exports = (app) => {
    app.use('/', home )

    app.use('/cv', cv )

    app.use('/service', service )

    app.use(function(req,res){
        res.status(404).render('pages/error404',)
    })
}