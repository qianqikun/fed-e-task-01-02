const cars = require("./data")
const fp = require("lodash/fp");


const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(isLastInStock(cars))