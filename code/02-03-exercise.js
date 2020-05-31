const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: "Albert" }
let ex3 = function (obj, prop) {
    return safeProp(prop)(obj).map(fp.first)._value
}
console.log(ex3(user, "name"))