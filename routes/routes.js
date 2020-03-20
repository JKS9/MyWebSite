const home = require('./home.js')
const cv = require('./cv.js')
const competence = require('./competence.js')

module.exports = (app) => {
    app.use('/', home )

    app.use('/Cv', cv )

    app.use('/Competence', competence )

    app.use(function(req,res){
        res.status(404).render('pages/error404',)
    })
}