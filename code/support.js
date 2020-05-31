class Container {
    static of(value) {
        return new Container(value)
    }

    constructor(value) {
        this._value = value
    }

    map(fn) {
        return Container.of(fn(this._value))
    }
}

class Maybe {
    static of(x) {
        return new Maybe(x)
    }

    isNoting() {
        return this._value === null || this._value === undefined
    }

    constructor(x) {
        this._value = x
    }

    map(fn) {
        return this.isNoting() ? this : Maybe.of(fn(this._value))
    }
}

module.exports = {
    Container, Maybe
}