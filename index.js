const express = require ('express')
const app = express()

app.get('/', function(rep,res){

    res.send('Ola Naty.')
})

app.get('/msg', function(rep,res){
    res.send("Essa mensagem é automática!")})

app.get('/sobre', function(rep,res){
        res.send("Essa página está sendo devolvida pela Naty")})

app.listen(3000,function(){


    console.log("Conexão inicializada")
})
