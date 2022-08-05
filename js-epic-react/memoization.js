const cache = {}

function addTwo(input) {
    if (!cache.hasOwnProperty(input)) {
        cache[input] = input + 2
        console.log('cached')
    }

    return cache[input]
}

console.log(addTwo(3)) // 5
console.log(addTwo(3)) // 5, but this time it's from cache

// let's imagine we have a function that returns an array of matching
// "post" objects:
// assuming getPostsNoMemo is not memoized
function getPostsNoMemo() {}
const posts1 = getPostsNoMemo('search term')
const posts2 = getPostsNoMemo('search term')
posts1 === posts2 // false (unique arrays)
// but if we memoize
// assuming getPostsMemo is memoized
function getPostsMemo() {}
const posts3 = getPostsMemo('search term')
const posts4 = getPostsMemo('search term')
posts1 === posts2 // true (identical array) 🤓
