var express = require('express');
var router = express.Router();
var calcController= require('../controllers/calculateController');

router.get('/add',(req, res)=>{
    //router:linka o request e retorna a reposta
    calcController.addNumbers(req, res)
})

router.get('/sub',(req, res)=>{
    calcController.subNumbers(req, res)
})

router.get('/mul',(req, res)=>{
    calcController.mulNumbers(req, res)
})

router.get('/div',(req, res)=>{
    calcController.divNumbers(req, res)
})


module.exports = router;  