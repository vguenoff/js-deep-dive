function sayMyName() {
    var a = ''

    return function findName() {
        var b = 'b'

        return function printName() {
            var c = 'c'

            console.log('Vasil Genov')
        }
    }
}

sayMyName()()()

const script1 = (function () {
    const a = () => {
        return 5
    }

    return {
        a,
    }
})()

console.log(script1.a())

function a() {
    return 'hahaha'
}

console.log(a())
