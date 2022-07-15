// Primitive values
typeof 'hi' // 'string' - data that only represents a single value
typeof 5 // 'number'
typeof true // 'boolean'
typeof undefined // 'undefined
typeof null // 'object' - this is error
typeof Symbol('just me') // 'symbol'

// Non-primitive - doesn't contain the value directly, instead it has a reference somewhere in memory where the object is held
typeof {} // 'object'
typeof [] // 'object' (arrays in js are objects)
typeof function () {} // 'function' (still an object)

Array.isArray([]) // true
