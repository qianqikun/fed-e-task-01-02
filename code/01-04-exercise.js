const fp = require("lodash/fp")


let _underscore = fp.replace(/\W+/g, "_")

let _match = function (reg) {
    return function (arr) {
        return arr.match(reg)
    }
}

const sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower))

const sanitizeNames2 = fp.map(fp.flowRight(fp.join("_"), fp.map(fp.toLower), _match(/[A-Z][a-z]*/g)))

console.log(sanitizeNames(["Hello World"]))
console.log(sanitizeNames2(["HelloWorld"]))

