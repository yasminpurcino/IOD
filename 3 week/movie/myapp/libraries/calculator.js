//import { v4 as uuidv4 } from 'uuid';
const logger = require("./logging")
const v4 = require('uuid')

class Calculator {
    constructor() {
        this.id = v4.v4();
        //    logger(this.id)

    }
    #log = (value) => {
        //  logger(`[Calculator:${this.id}]:${value}`)
        logger("Logger:", this.id, "Result:".value)
    }


    add(num1, num2) {
        let sum = num1 + num2
        this.#log(sum)
        return sum

    }

    sub(num1, num2) {
        let sub = num1 - num2
        this.#log(sub)
        return sub
    }

    div(num1, num2) {
        let div = num1 / num2
        this.#log(div)
        return div
    }


    mul(num1, num2) {
        let mul = num1 * num2
        this.#log(mul)
        return mul
    }
}




module.exports = Calculator