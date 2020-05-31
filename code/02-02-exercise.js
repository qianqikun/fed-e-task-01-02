const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let xs = Container.of(["do", "try", "me", "fa", "so", "la", "ti", "do"])

let ex2 = function (func) {
    return func.map(fp.first)._value
}
console.log(ex2(xs))