const express = require ('express')
const app = express()

app.get('/', function(req,res){

    res.send('Ola Naty.')
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática!")})

app.get('/sobre', function(req,res){
        res.send("Essa página está sendo devolvida pela Naty")})

app.get('/layout', function(req,res){
            res.send("Esse é o novo layout")})

app.listen(3000,function(){


    console.log("Conexão inicializada")
})
