// Javascript Runtime

// - Call stack (only one)
// - Memory Heap (only one)
// - Web Apis (DOM, Fetch, setTimeout) - asynchronous apis, running in the background while the synchronous js code is running

// All together - Event Loop -> Callback Queue

// Event loop only runs when the call stack is empty
// And the callback from the web api is pushed then

console.log(1)
setTimeout(() => {
    console.log(2)
}, 1000)
console.log(3)

/* Runtime vs Engine
    JS file -> the notes
    JS Engine -> the musician
    JS Runtime -> the whole orchestra (notes, musicians, instruments)
*/

// Node.js is a JS runtime

// Exercise
//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.')

function removeItemsFromList() {
    var item = list.pop()

    if (item) {
        // avoid stack overflow
        setTimeout(removeItemsFromList, 0)
    }
}

removeItemsFromList()
