const express = require ('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "pastpublic")))

app.get('/', function(req,res){
    res.render('index.ejs',{})
})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs',{ usuarios:[
        {nome:'Naty' ,email:'nataliacunhanunes21@gmail.com'},
        {nome:'Ana' ,email: 'ana@gmail.com'},
        {nome:'Andressa' ,email: 'andressa@gmail.com'},
        {nome:'Matheus' ,email: 'matheus@gmail.com'},
    ] })
})

app.listen ( 3000 ,  function ( ) {
    console . log  ( "Conexão inicializada" )
} )
