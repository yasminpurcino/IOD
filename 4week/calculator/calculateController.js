const Calculator =
    require('../libraries/calculator');
let myCalc = new Calculator()
//myCalc.add(3, 4)


const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2)
    //console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const subNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.sub(number1, number2)

    res.json({ result: sum })
}

const mulNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.mul(number1, number2)

    res.json({ result: sum })
}

const divNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.div(number1, number2)

    res.json({ result: sum })
}

module.exports = {
    addNumbers,
    subNumbers,
    mulNumbers,
    divNumbers
}



    // console.log(sum)
    // res.status(200)
    // res.json({result:sum})
    // }


    // console.log(sum)
    // res.status(200)
    // res.js
    // }



