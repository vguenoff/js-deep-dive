// Thread Of Execution
// * JavaScript is a single-threaded language
// * Single sequential flow of control
// * JavaScript is a synchronous language with asynchronous capabilities
// * A thread has a call stack & memory

// The Call Stack
// Stack of functions to be executed
// Manages execution contexts

// Stacks are LIFO (last in first out) last in first out

function first() {
    console.log('first...')
    second()
}

function second() {
    console.log('second...')
    third()
}

function third() {
    console.log('third...')
}

first()
