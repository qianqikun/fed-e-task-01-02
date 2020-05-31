const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let ex4 = function (n) {
    return Maybe.of(n).map(parseInt)._value
}