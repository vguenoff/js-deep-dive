function two() {
    var isValid // undefined
}

function one() {
    var isValid = true // local env
    two()
}

var isValid = false
one()

// two() --undefined
// one() --true
// Global --false
