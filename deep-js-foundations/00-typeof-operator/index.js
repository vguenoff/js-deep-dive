console.log(`----- typeof operator`)
var v
console.log(typeof v)
v = '1'
console.log(typeof v)
v = 2
console.log(typeof v)
v = true
console.log(typeof v)
v = {}
console.log(typeof v)
v = Symbol()
console.log(typeof v)

console.log(typeof doesntExist)
v = null
console.log(typeof v)
v = function () {}
console.log(typeof v)
v = [1, 2, 3]
console.log(typeof v, Array.isArray(v))
v = 42n // or BigInt(42)
console.log(typeof v)
