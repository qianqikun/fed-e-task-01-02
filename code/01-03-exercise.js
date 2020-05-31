const cars = require("./data")
const fp = require("lodash/fp");

let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}

let avaergeDollarValue = function () {
    let dollar_values = fp.map(function (car) {
        return car.dollar_value
    }, cars)
    return _average(dollar_values)
}

const avaergeDollarValue2 = fp.flowRight(_average, fp.map(car => car.dollar_value))

console.log(avaergeDollarValue2(cars))
