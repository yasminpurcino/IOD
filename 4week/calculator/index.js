//var SwaggerPetstore = require('swagger_petstore');



const express = require("express")
 
//let testRoute = require('./routes/myTestroute');
let calcRoute = require('./routes/calculateRouter');
//let petsRoute = require('./routes/petsRouter');


const app = express()
//const app2 = express()
const port = 3030
//const port2 = 2000

//app.get('/test', (req, res) => {
//res.send('Hello World!')
//})

//app2.get('/', (req, res) => {
  //  res.send('Hello Yasmin')
    //})


app.use('/', express.static('public'))
app.use('/calculatorRoute', calcRoute)
//app.use('/petsRouter', petsRoute)
//app.use('/myteste', testRoute)

    
// add the Swaggerservice to our server, so let’s modify our index.js to include it.
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log(`Example app
    listening at
    http://localhost:${port}`)
    })

    

// app.get('/test', (req, res) => {
//     res.send('This is a test')
//     })

//  app2.listen(port2, () =>{
//     console.log("Example app listening at http://localhost:${port2}")
//  })

//  function add(x)
//  {
//    return x + x;
//  }
//  console.log(add(2))

// let root = "hi"


// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   }
  
//   app.use(express.static('public', options))
 //console.log("hello world")
