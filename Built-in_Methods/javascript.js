// Join another string with current string given in function input
// Given input  to arrayToJoin = concatMyArray(['How', 'are', 'you', 'today'])
function concatMyArray(arrayToJoin) {
    //console.log(arrayJoin) // Testing
    return arrayToJoin.join("");

}

// Input -> arrayToJoin
console.log(concatMyArray(['How', 'are', 'you', 'today']));


// Capitalize input 
// Create split splitTheString variable
// Split given stringInput
// Use map to map out the string into an array. 
// Get the 1st index and assign it to 0. Use topperCase() to make 1st letter uppercase
// Concatenate with sub string and set index to 1; Return this at the same time within the inner scope of the function.
// return splitTheString variable 
function capitalize(stringInput) {

    let splitTheString = stringInput.split(" ").map(function(stringInput) {
        //console.log(stringInput[0].toUpperCase() + stringInput.substr(1)) // Testing;
        return stringInput[0].toUpperCase() + stringInput.substr(1)

    });

    return splitTheString.join(" ");

}

// Input -> stringInput
console.log(capitalize("have a good day"));



// Get inputArray This is an empty array initially 
// create a variable called getHidingSpot = to inputArray - find door 
// Create theDoor input within a arrow function return theDoor again within arrow function
// Return theDoor hiding = "Scooby"
// If getHidingSpot strictly = undefined return a 0 value
// Else getHidingSpot theDoor.
function whereAreYou(inputArrayObject) {
    let getHidingSpot = inputArrayObject.find((theDoor) => {
        return theDoor.hiding === "Scooby";


    });

    // console.log(getHidingSpot); // Testing
    if (getHidingSpot === undefined) return 0;
    else return getHidingSpot.door;



}



// Input -> inputArrayObject
console.log(whereAreYou([]));
console.log(whereAreYou([{ door: 1, hiding: "Scooby" }, { door: 2, hiding: "Shaggy" }, { door: 3, hiding: "Velma" }]));





// Get input string
// Create the word array assign it to getString split the string.
// Log it to console for testing to see the string broken into an array.
// Create another variable called outputResult assign it to createWordArray.
// Filter allWords into a function
// return allWords to lowerCase and should NOT = to "buzz" (We are removing buzz if it exist in the input string)
// Finally return outputResult and chain a join function; This converts the word array back to a string
// We can Console Log a Sentence with a buzz in the word the sentence will appear and the buzz word will be removed. 
function deBee(getString) {
    let createWordArray = getString.split(" ");
    console.log(createWordArray);

    let outputResult = createWordArray.filter((allWords) => {
        console.log(allWords);
        return allWords.toLowerCase() !== "buzz";

    })

    return outputResult.join(" ")
}

// Input -> getString
console.log(deBee("Buzz what did you have for breakfast today buzz buzz"));