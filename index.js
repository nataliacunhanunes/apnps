const express = require ('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")

app.get('/', function(req,res){

    res.send('Ola Naty.')
})

app.listen ( 3000 ,  function ( ) {
    console . log  ( "Conexão inicializada" )
} )
