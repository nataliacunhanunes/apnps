const express = require ('express')
const app = express()

app.get('/', function(rep,res){

    res.send('Ola Naty.')
})

app.listen(3000,function(){


    console.log("Conexão inicializada")
})