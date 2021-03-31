const  express  =  require  ( "express" )
const  app  =  express ( )
var  bodyParser  =  require ( "body-parser" )
var  cookieParser  =  require ( "analisador de cookies" )
var  path  =  require ( "path" ) 

app . use ( cookieParser ( ) )

app . use ( bodyParser . json ( ) )
app . use ( bodyParser . urlencoded ( { extended : false } ) )

app . set ( "view engine" ,  "ejs" )

app . use ( express . static ( path . join ( __dirname , "public" ) ) )

app . get  ( '/' ,  função ( req , res ) {
res . enviar  ( "Olá Naty" )
} )


app . listen ( 3000 ,  function ( ) {
    console . log  ( "Conexão inicializada" )
} )
