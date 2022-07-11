// Memory heap - a store, large region of memory that the javascript engine provides for us

const number = 42 // allocate memory for number
const string = 'some text' // allocate memory for a string variable
const human = {
    firstName: 'vasil',
    lastName: 'genov',
} // allocate memory for an object and its values

// Call stack - a region of memory to keep order of execution.
// It operates in first in - last out mode / adds and pops
// The different stack frames use the memory heap to lookup data
// SImple variables can usually be stored on the stack
// And mote complex data structures like objects are stored in the memory heaps
function subtractTwo(num) {
    return num - 2
}

function calculate() {
    const sumTotal = 4 + 5
    return subtractTwo(sumTotal)
}

calculate()
// will adds the calculate function on top of the stack
// then add the subtractTwo function
// then remove  the subtractTwo function
// then remove  the calculate function
// and after it finishes it's going to remove it
