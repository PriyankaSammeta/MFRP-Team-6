const express = require('express')
const app = express()
const api = require('./api')
const morgon = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port',(process.env.PORT || 8000))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api', api)
app.use(express.static('static'))

app.use(morgon('dev'))

app.use(function(req,res){
    const err = new Error('Not found')
    err.status=404
    res.json(err)
})

// mongoDb CONNECTION
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/virtualstandups',{ useNewUrlParser: true})
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('connected to MongoDb')
    app.listen(app.get('port'),function(){
        console.log('API server Listening on port' + app.get('port') + '!')
    })
})