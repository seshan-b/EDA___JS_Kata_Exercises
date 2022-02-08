// JavaScript Variables and Objects
let secretNumber = 1;
let password = 4;
let allowedIn = true;
let members = 9;

// Write your code below.

secretNumber = "2";
secretNumber = 7;

password = "5";
password = "just open the door";

allowedIn = false;

members = []
members[0] = "Mary";
members[3] = "John";
















// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
    if (!test) {
        console.log(test_number + "false: " + message);
        throw new Error(message);
    }
    console.log(test_number + "true");
    return true;
}

assert(
    secretNumber != undefined,
    "The variable secretNumber should have a value.",
    "1. "
)

assert(
    typeof secretNumber === 'number',
    "The value of secretNumber should be a number.",
    "2. "
)

assert(
    secretNumber === 7,
    "The value of secretNumber should be 7.",
    "3. "
)

assert(
    password != undefined,
    "The variable password should have a value.",
    "4. "
)

assert(
    typeof password === 'string',
    "The value of password should be a string.",
    "5. "
)

assert(
    password === "just open the door",
    "The value of password should be 'just open the door'.",
    "5. "
)

assert(
    allowedIn != undefined,
    "The variable allowedIn should have a value.",
    "6. "
)

assert(
    typeof allowedIn === 'boolean',
    "The value of allowedIn should be a boolean.",
    "7. "
)

assert(
    allowedIn === false,
    "The value of allowedIn should be false.",
    "8. "
)

assert(
    members != undefined,
    "The variable members should have a value.",
    "9. "
)

assert(
    Array.isArray(members),
    "The value of members should be an array",
    "10. "
)

assert(
    members[0] === "Mary",
    "The first element in the value of members should be 'Mary'.",
    "11. "
)

assert(
    members[3] === "John",
    "The fourth element in the value of members should be 'John'.",
    "12. "
)

console.log("\nYou did it!\n")