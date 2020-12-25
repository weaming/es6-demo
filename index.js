import {Ball} from './ball.js'

let print = console.log.bind(console)

var x = 15926
const Pi = 3.14
const carry = 10000000
let PiLong = Pi + x / carry
print(PiLong)

// 函数
function add(a, b) {
  return a + b
}
let add2 = (a, b) => a + b
print(add(Pi, x / carry), add2(Pi, x / carry))

print(Pi.toString() + x.toString())
// Template literals
print(`${Pi}${x}`)
print(`${Pi}
${x}`)

// Key shorthand
let pii = {
  Pi,
  x,
}
print(pii)

// destructring
let {Pi: a, x: b} = pii
print(a, b)

// let ... of ...
for (let x of PiLong.toString()) {
  print(x)
}

// 默认参数
let area = (r = 1) => PiLong * r ** 2
print(area())
print(area(10))

let join = (...xs) => xs.join(' ')
let digits = PiLong.toString().split('')
print(join(...digits))

// class - es5
function BallES5(r) {
  this.r = r
}

BallES5.prototype.area = function () {
  return PiLong * this.r ** 2
}
BallES5.prototype.volume = function () {
  return PiLong * this.r ** 3
}

const earthRadius = 6371 * 1000
var earth = new BallES5(earthRadius)
print(earth.area(), earth.volume())

// class - es6
var earth = new Ball(earthRadius)
print(earth.area(), earth.volume())

// promise
function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open(method, url)
    req.onload = resolve
    req.onerror = reject
    req.send()
  })
}

// makeRequest('GET', 'http://ip-api.com/json')
//   .then((event) => print(event.target.response))
//   .catch((err) => {
//     throw new Error(err)
//   })

fetch('http://ip-api.com/json')
  .then(response => response.json())
  .then(body => print(body))
  .catch(err => {
    throw new Error(err)
  })
