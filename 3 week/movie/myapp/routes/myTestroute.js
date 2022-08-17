var express = require('express');
var router = express.Router();

var coinBaseController= require('../controllers/coinBaseController');

router.get('/test', (req, res) => {
    console.log(req.query.firstName)
    console.log(req.query.lastName)
    let name= req.query.firstName+''+ req.query.lastName
res.send('Hello'+ name)
})

router.get('/test2', (req, res) => {
res.send('Second test')
})



router.get('/movies',(req, res)=>{
    calcController.moviesApi(req, res)
})

router.get('/coinBaseAtms',(req, res)=>{
    console.log("hello")
    coinBaseController.getAtms(req, res)
})






module.exports = router;    