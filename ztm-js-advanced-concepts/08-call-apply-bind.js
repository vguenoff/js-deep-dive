function a() {
    console.log('hi')
}

a.call()

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(a = 50, b = 50) {
        return (this.health += a + b)
    },
}

const archer = {
    name: 'Robin',
    health: 30,
}

console.log(wizard.health)
console.log(wizard.heal())
console.log(wizard.health)

console.log(archer.health)
console.log(wizard.heal.call(archer, 50, 100))
console.log(archer.health)
console.log(wizard.heal.apply(archer, [50, 100]))
console.log(archer.health)
const healArcher = wizard.heal.bind(archer, 50, 100)
healArcher()
console.log(archer.health)

// How would you implement this:

const array = [33, 1, 2, 3, 44]

function getMaxNumber(arr) {
    //code here
    // return arr.reduce((acc, currVal) => (acc > currVal ? acc : currVal))
    // return Math.max(...arr)
    return Math.max.apply(null, arr)
}

console.log(
    getMaxNumber(array), // should return 3
)

// function curring
function multiply(a) {
    return b => a * b
}

const timesTwo = multiply(2)
console.log(timesTwo(5))

// function curring with bind
function multiply2(a, b) {
    return a * b
}

const timesTwo2 = multiply2.bind(this, 2)
console.log(timesTwo2(5))

console.log('-----------')
// Run this code, and you will see there is an issue. How would you fix it?

const character = {
    name: 'Simon',
    getCharacter() {
        return () => this.name
    },
}
const giveMeTheCharacterNOW = character.getCharacter()

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()) //this should return 'Simon' bud doesn't
