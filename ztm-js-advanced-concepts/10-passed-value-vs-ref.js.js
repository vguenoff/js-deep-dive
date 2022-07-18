// pass by value
var a = 5
var b = a

b++
console.log(a) // 5
console.log(b) // 6

// pass by ref
let obj1 = { name: 'yao', pass: 123 }
let obj2 = obj1

obj2.pass = 321

console.log(obj1.pass)
console.log(obj2.pass)

let c = [1, 2, 3]
let d = c

d.push(123123)
console.log(c)
console.log(d)

let obj3 = { a: 'a', b: 'b', c: { deep: 'c' } }
// let obj3ShallowClone = Object.assign({}, obj3)
let obj3ShallowClone = { ...obj3 }
let obj3DeepClone = JSON.parse(JSON.stringify(obj3)) // performance issues
obj3.c.deep = 5

console.log({ obj3 })
console.log({ obj3ShallowClone })
console.log({ obj3DeepClone })

let arr3 = [5, 6, 7]
// let arr3ShallowClone = [].concat(arr3)
let arr3ShallowClone = [...arr3]
arr3.push(441232123)

console.log(arr3)
console.log(arr3ShallowClone)
