var x = 15926
const Pi = 3.14
const carry = 10000000
let PiLong = Pi + x / carry

// class - es6
export class Circle {
  constructor(r) {
    this.r = r
  }
  area() {
    return PiLong * this.r ** 2
  }
}

export class Ball extends Circle {
  constructor(r) {
    super(r)
  }
  volume() {
    return PiLong * this.r ** 3
  }
}
