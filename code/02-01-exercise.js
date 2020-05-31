const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let maybe = Maybe.of([5, 6, 11])
let ex1 = function (num) {
    return function (func) {
        return func.map(fp.map(fp.add(num)))
    }
}

console.log(ex1(1)(maybe))