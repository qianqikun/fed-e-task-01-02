const cars = require("./data")
const fp = require("lodash/fp");


const isFirstName = fp.flowRight(fp.prop('name'), fp.first)
console.log(isFirstName(cars))