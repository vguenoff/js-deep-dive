console.log('1-----')
// function and var are hoisted during the creation phase of the global execution context
// const and let are not hoisted -> ReferenceError
console.log(teddy) // this is undefined because teddy is hoisted
console.log(sing())
// console.log(sing2()) // Uncaught TypeError: sing2 is not a function

var teddy = 'bear'

// function expression
function sing() {
    console.log('ohhh la la la')
}

// function declaration
var sing2 = function () {
    console.log('uhhh la la la')
}

// a() // Uncaught SyntaxError: Identifier 'a' has already been declared

// function a() {
//     console.log('hi')
// }

// function a() {
//     console.log('bye')
// }

var favoriteFood = 'grapes'

var foodThoughts = function () {
    // Any time we run a function a new execution context gets created
    console.log('Original favorite food: ' + favoriteFood) // Original favorite food: undefined

    var favoriteFood = 'sushi'
    // const favoriteFood = 'sushi' // favoriteFood is not defined

    console.log('New favorite food: ' + favoriteFood) // New favorite food: sushi
}

foodThoughts()
