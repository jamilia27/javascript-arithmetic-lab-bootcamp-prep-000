 var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add() {
  return a += b
}

function subtract() {
  return a -= b
}

function multiply() {
  return a *= b
}

function divide() {
  return a /= b
}