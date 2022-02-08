// These are helper functions for our tests.
// You do not need to change any code in here.

function assert(test_number, message, expected, actual) {
    if (!equal(actual, expected)) {
        console.log(test_number + ": failed - " + message);
        console.log("\n\nExpected:\n" + print(expected))
        console.log("\n\nReceived:\n" + print(actual) + "\n")
        throw new Error(message);
    }
    console.log(test_number + ": PASS!");
    return "Awesome job!";
}

function equal(a, b) {
    if (typeof a != typeof b) return false
    if (Array.isArray(a)) return arrEquals(a, b)
    return a === b
}

function print(thing) {
    if (Array.isArray(thing)) return printArr(thing)
    if (typeof thing == 'string') return printStr(thing)
    if (typeof thing == 'object') return printObj(thing)
    return thing
}

function printArr(arr) {
    let str = "["
    arr.forEach((i, idx) => {
        if (idx > 0) str += ", "
        str += print(i)
    })
    str += "]"
    return str
}

function printStr(str) {
    return '"' + str + '"'
}


function arrEquals(a1, a2) {
    return JSON.stringify(a1) == JSON.stringify(a2)
}



export { assert };