// Manipulating JavaScript Objects

// DO NOT ALTER THIS OBJECT BY ADDING ANYTHING WITHIN THE CURLY BRACES!
var terah = {
        name: "Terah",
        age: 32,
        height: 66,
        weight: 130,
        hairColor: "brown",
        eyeColor: "brown"
    }
    // __________________________________________
    // Write your code below.


// adam Object initialized;
let adam = {};

adam.name = "Adam";


terah.spouse = adam;

terah.weight = 125;

terah.eyeColor = undefined;

terah.spouse.spouse = terah;

// children Object initialized;
let children = {};


terah.children = children;

// ben Object initialized;
let ben = {};

terah.children.ben = ben;

terah.children.ben.name = "Ben";

// wilson Object initialized;
let wilson = {};

terah.children.wilson = wilson;

terah.children.wilson.name = "Wilson";

// felicia Object initialized;
let felicia = {};


terah.children.felicia = felicia;

terah.children.felicia.name = "Felicia";

adam.children = terah.children;







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
    typeof adam === 'object',
    "The value of adam should be an Object.",
    "1. "
)

assert(
    adam.name === "Adam",
    "The value of the adam name property should be 'Adam'.",
    "2. "
)

assert(
    terah.spouse === adam,
    "terah should have a spouse property with the value of the object adam.",
    "3. "
)

assert(
    terah.weight === 125,
    "The terah weight property should be 125.",
    "4. "
)

assert(
    terah.eyeColor === undefined || null,
    "The terah eyeColor property should be deleted.",
    "5. "
)

assert(
    terah.spouse.spouse === terah,
    "Terahs spouses spouse property should refer back to the terah.",
    "6. "
)

assert(
    typeof terah.children === 'object',
    "The value of the terah children property should be defined as an Object.",
    "7. "
)

assert(
    typeof terah.children.ben === 'object',
    "ben should be defined as an object and assigned as a child of Terah",
    "8. "
)

assert(
    terah.children.ben.name === "Ben",
    "Terah's children should include an object called ben which has a name property equal to 'Ben'.",
    "9. "
)

assert(
    typeof terah.children.wilson === 'object',
    "wilson should be defined as an object and assigned as a child of Terah",
    "10. "
)

assert(
    terah.children.wilson.name === "Wilson",
    "Terah's children should include an object called wilson which has a name property equal to 'Wilson'.",
    "11. "
)

assert(
    typeof terah.children.felicia === 'object',
    "felicia should be defined as an object and assigned as a child of Terah",
    "12. "
)

assert(
    terah.children.felicia.name === "Felicia",
    "Terah's children should include an object called felicia which has a name property equal to 'Felicia'.",
    "13. "
)

assert(
    adam.children === terah.children,
    "The value of the adam children property should be equal to the value of the terah children property",
    "14. "
)

console.log("\nHere is your final terah object:");
console.log(terah);