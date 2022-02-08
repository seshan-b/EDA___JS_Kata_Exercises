// Gradebook from Names and Scores


// Initiate students.
var students = ["Joseph", "Susan", "Wiremu", "Elizabeth"]

// Initiate scores variable
var scores = [
    [80, 70, 70, 100],
    [85, 80, 90, 90],
    [75, 70, 80, 75],
    [100, 90, 95, 85]
]

// __________________________________________
// Write your code below.

// Create the Grad Book Object
// Assign Objects 
// - Joseph 
// -----Set scores to 0; 
// - Susan 
// -----Set scores to 1; 
// - Wiremu
// -----Set scores to 2; 
// - Elizabeth
// -----Set scores to 3; 

var gradebook = {
    Joseph: {
        testScores: scores[0]
    },
    Susan: {
        testScores: scores[1]
    },
    Wiremu: {
        testScores: scores[2]
    },
    Elizabeth: {
        testScores: scores[3]
    }
}

// Log the Object to see in console.
console.log(gradebook);


// Add Score to Grad Students name
// Get the score and assign it to getScore 
// Add the score to addScoreToGradName
// push test scores to pushTestScoreIntoTestScore

function addScore(getScore, addScoreToGradName, pushTestScoreIntoTestScore) {
    getScore[addScoreToGradName].testScores.push(pushTestScoreIntoTestScore);

    // Output to see what is happening
    //console.log(addScoreToGradName); / / Testing
    //console.log(pushTestScoreIntoTestScore); // Testing
    //console.log(getScore); // Testing


}




// Set Averages
// Set Totals to 0
// Loop through the setAverage using a for loop.
// Return setTotal Divided but setAverage get Length of setAverage.

function average(setAverage) {
    let setTotal = 0;
    for (let i = 0; i < setAverage.length; i++) {
        setTotal += setAverage[i];
    }
    console.log(setTotal / setAverage.length);
    // console.log(setAverage); // Testing
    return setTotal / setAverage.length;
}




// Get Test Score averages.
// Set the test scores to SetGradScoreToName
// Return setScores.
function getAverage(setGradScoreToName) {
    let setScores = gradebook[setGradScoreToName].testScores;

    console.log(setScores); // Testing
    return average(setScores);

}


// Store storeGradName
// Assign to the storeGradName
// Loop through Students and setGradName with an setIndex using a ForEach loop  using function chaining. 
function enterScores(storeGradName, loopStudents, setTestScores) {
    loopStudents.forEach((setGradName, setIndex) => {
        storeGradName[setGradName] = {};
        storeGradName[setGradName].testScores = setTestScores[setIndex];

        //console.log(storeGradName); // Testing

    });
}



// __________________________________________
// Test Code:  Do not alter code below this line.

console.log('JS Gradebook\n')

function assert(test, message, t) {
    test_number++
    if (!test) {
        console.log(test_number + ". false: " + message);
        throw new Error(message);
    }
    console.log(test_number + ". true");
    return true;
}

let test_number = 0

assert(
    (typeof gradebook === 'object' && !Array.isArray(gradebook)),
    "The value of gradebook should be an Object.\n"
)

assert(
    (typeof gradebook["Elizabeth"] === 'object'),
    "gradebook's Elizabeth property should be an object."
)

assert(
    (gradebook.Wiremu && gradebook.Wiremu.testScores === scores[2]),
    "Wiremu's testScores should equal the third element in scores."
)

assert(
    (typeof addScore === 'function'),
    "addScore should be a Function."
)
assert(
    (gradebook.Susan && gradebook.Susan.testScores === scores[1]),
    "Susans's testScores should equal the second element in scores."
)

addScore(gradebook, "Susan", 80)

assert(
    (gradebook.Susan.testScores.length === 5 &&
        gradebook.Susan.testScores[4] === 80),
    "Susan's testScores should have a new score of 80 added to the current scores once addScore(gradebook, \"Susan\", 80) has been run."
)

assert(
    (typeof average === 'function'),
    "The value of average should be a Function.\n"
)

assert(
    (typeof average([1]) == 'number'),
    "average should return a number.\n"
)

assert(
    (average([1, 2, 3]) === 2 && average([4, 8, 3]) === 5),
    "average should return the average of the numbers in the given array argument.\n"
)

assert(
    (typeof getAverage === 'function'),
    "getAverage should be a Function."
)

assert(
    (getAverage("Joseph") === 80),
    "getAverage should return 80 if passed the string 'Joseph'."
)

assert(
    (getAverage("Susan") === 85 && getAverage("Wiremu") === 75 && getAverage("Elizabeth") === 92.5),
    "getAverage should return an accurate average of the test scores for any student name given"
)

// Stretch

console.log("\nStretch material \n----------------")

gradebook = {}

assert(
    (typeof enterScores === 'function'),
    "enterScores should be a Function."
)

enterScores(gradebook, students, scores)

assert(
    (gradebook.Joseph != undefined && gradebook.Joseph.testScores === scores[0]),
    "as enterScores(gradebook, students, scores) has now been run, Joseph's test scores should equal the first element in scores."
)

assert(
    (gradebook.Susan.testScores === scores[1] && gradebook.Wiremu.testScores === scores[2] && gradebook.Elizabeth.testScores === scores[3]),
    "enterScores should assign the scores from the given array for all the students given."
)

console.log("\nWell done :)\n")
console.log("\nWell done :)\n")