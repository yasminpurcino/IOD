var SwaggerPetstore = require('swagger_petstore');

const express = require("express");
const moviesRouter = require("./routes/moviesRouter")
let app = express()


const port = 1000


app.use('/', express.static('public'))
app.use('/movies', moviesRouter)


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// app.get('/test', (req, res) => {
//     res.send('Hello word')
// })



app.listen(port, () => {
    console.log(`Example app
    listening at
    http://localhost:${port}`)
})

