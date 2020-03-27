const home = require('./home.js')
const cv = require('./cv.js')
const service = require('./service.js')

const newDate = new Date()

module.exports = (app) => {
    app.use('/', home )

    app.use('/Cv', cv )

    app.use('/Service', service )

    app.use(function(req,res){
        res.status(404).render('pages/error404', {
            years: newDate.getFullYear()
        })
    })
}