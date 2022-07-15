// this is the object that a function is a property of
// it gives methods access to their objects
// execute same code for multiple objects

function a() {
    // 'use strict' by default
    console.log(this) // undefined
}

function b() {
    'use strict'
    console.log(this) // undefined
}

a()
b()

const obj = {
    name: 'Billy',
    sing(and = 'nothing else') {
        console.log(`${this.name} sings lalalal and ${and}`)
    },
    singAgain() {
        this.sing('dance')
    },
}

console.log(obj.name)
console.log(obj.sing())
console.log(obj.singAgain())

function importantPerson() {
    console.log(this.name + '!')
}

const obj2 = {
    name: 'jacob',
    importantPerson,
}

const obj3 = {
    name: 'jane',
    importantPerson,
}

obj2.importantPerson()
obj3.importantPerson()
console.log('----------')

const aa = function () {
    console.log('a', this)
    const b = function () {
        console.log('b', this)
        const c = {
            hi() {
                console.log('c', this)
            },
        }
        c.hi() // {hi: f}
    }
    b()
}

aa()

const obj5 = {
    name: 'billy',
    sing() {
        console.log('a', this) // obj5 {...}

        // var anotherFunction = function () {
        //     console.log('b', this) // window
        // }

        var anotherFunction = () => {
            // arrow functions lexically bound this
            console.log('b', this) // obj5 {...}
        }

        anotherFunction()
    },
}
