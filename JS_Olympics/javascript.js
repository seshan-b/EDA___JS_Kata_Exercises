// JavaScript Olympics

// 0. Warm Up


// Initialize athleteArray and assign it to a variable. 
let athleteArray = [];

// Create the player object 1
// ---> Create 
// -----> name: santa
// -----> age: 1748
// -----> sport: delivery,
// -----> quote: 'Doh!'
let santa = {
    name: 'Santa',
    age: 99,
    sport: 'Running',
    quote: 'i am not paid enough for this'
}
console.log(santa); // Testing


// Create the player object 2
// ---> Create 
// -----> name: homer
// -----> age: 39
// -----> sport: 'donut eating',
// -----> quote: 'Doh!'
let homer = {
        name: 'Homer',
        age: 39,
        sport: 'Ice Skating',
        quote: 'Doh!'
    }
    //console.log(homer); // Testing

// Push objects into athleteArray object
athleteArray.push(santa);
athleteArray.push(homer);


// Log the athleteArray
//console.log(olympicAthleteArray); // Testing


// 1. Bulk Up

// Loop through athleteArray using a forEach input olympicPlayer
// Add win object to both players
// Log it to the console 
// Concatenate olympicPlayer.name and olympicPlayer.sport to strings.
athleteArray.forEach((olympicPlayer) => {
    olympicPlayer.win = function() {
        console.log(olympicPlayer.name + " won the " + olympicPlayer.sport + " event!")
            //console.log(olympicPlayer.winnerOfSport.name);
    }
});




// 2. Jumble your words

// Create a function with a consistent variable.
// Take input through parameter word.
// Create variable sortWords = split reverse join. chain functions. 
// return output sortWords
const unjumble = (word) => {

    //console.log(word.split("").reverse().join("")); // Testing this string
    let sortWords = word.split("").reverse().join("");
    return sortWords;
}

// Testing the function
console.log("Testing unjumbleWords");
console.log(unjumble("uoy era woh")) // Testing



// 3. Odds Out
// Create a function with a consistent variable.
// return value number and filter through them. 
// Modulus of 2 so we are removing odd numbers and return it within the function scope.
const removeOdds = (removeNumbers) => {

    return removeNumbers.filter(storeNumber => {
        return !(storeNumber % 2)
    })

}

// Testing removeOddsNumbers
console.log("Testing removeOddsNumbers");
console.log(removeOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Testing






// 4. We built this city

// Create a newAthlete and 
// return object values.
const newAthlete = (name, age, sport, quote) => {
    return {
        name,
        age,
        sport,
        quote
    }
}

// Testing newAthlete 
console.log("Load New Player");
console.log(newAthlete("james", 21, "Kayaking", "I am can do it")); // Testing


















// __________________________________________
// Driver Code:  Do not alter code below this line.

console.log('Welcome to the JavaScript Olympics!\n')

const tests = [{
        name: "The Warm Up",
        intro: "It's time for our first event:",
        funcs: [{
                test: () => athleteArray.length > 1,
                message: "It appears we don't yet have enough entries for our warm up event. Are there any other challengers who would like to join?"
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        if (typeof athleteArray[i] !== 'object' || Array.isArray(athleteArray[i])) {
                            return false
                        }
                    }
                    return true
                },
                message: "One of our entrants seems to be the wrong type! This event's for Objects only."
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        let props = Object.keys(athleteArray[i])
                        if (!(props.includes("name") && props.includes("age") && props.includes("sport") && props.includes("quote"))) return false
                    }
                    return true
                },
                message: "Will all entrants please make ensure they have included their name, age, sport, and quote for registration."
            }
        ]
    },

    {
        name: "The Bulk Up",
        intro: "Now, for our second challenge:",
        funcs: [{
                test: () => {
                    for (i in athleteArray) {
                        let props = Object.keys(athleteArray[i])
                        if (!props.includes("win")) return false
                    }
                    return true
                },
                message: "Looking round at our athletes, it seems like some of them may not have the ability to win in them!"
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        let a = athleteArray[i]
                        if (typeof a.win !== "function") return false
                    }
                    return true
                },
                message: "There's at least one athlete in there that wouldn't know what to do if we told them they'd won.\nPerhaps someone should provide them a Function."
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        let a = athleteArray[i]
                        let oldLog = console.log
                        let logCalled = false

                        console.log = function(str) { logCalled = true }

                        a.win()
                        console.log = oldLog

                        if (!logCalled) return false
                    }
                    return true
                },
                message: "The round finishes and everyone waits for the announcement of who won. Perhaps we need a console.log?"
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        let a = athleteArray[i]
                        let oldLog = console.log
                        let logResult = ""

                        console.log = function(str) { logResult = str }

                        a.win()
                        console.log = oldLog

                        if (logResult == undefined || !logResult.length) return false
                    }
                    return true
                },
                message: "The commentator goes to announce the winner, but nothing leaves their mouth! It looks like they need some info in that console.log"
            },

            {
                test: () => {
                    for (i in athleteArray) {
                        let a = athleteArray[i]
                        let oldLog = console.log
                        let logStr = ""

                        console.log = function(str) { logStr = str }

                        a.win()
                        console.log = oldLog

                        if (logStr !== a.name + " won the " + a.sport + " event!") return false
                    }
                    return true
                },
                message: '"' + getWinnerLog() + '" shouted the commentator. Hmm, that wasn\'t quite what their co-host expected them to say..'
            }

        ]
    },

    {
        name: "!sdrow ruoy elbmuJ",
        intro: "It's time to head backwards round the track and..",
        funcs: [{
                test: () => typeof unjumble === 'function',
                message: "As we start our event, it seems no-one knows what to do! It looks like we need a Function to tell us how to unjumble."
            },

            {
                test: () => typeof unjumble("") === "string",
                message: "Well, they look to be off to a good start.. but we don't seem to be getting back any strings"
            },

            {
                test: () => unjumble("olleH") === "Hello",
                message: '"Hello" says one compeditor. "' + (unjumble && unjumble("olleH")) + '" replies the other.'
            },

            {
                // If they're still answering 'Hello'
                test: () => unjumble("!siht fo gnah eht tog ev'I kniht I") !== "Hello",
                message: '"Hello" says the compeditor. The others say hello back as they work on their next string.'
            },

            {
                test: () => unjumble("!siht fo gnah eht tog ev'I kniht I") == "I think I've got the hang of this!",
                message: '"' + (unjumble && unjumble("!siht fo gnah eht tog ev'I kniht I")) + '" says the compeditor. That wasn\'t quite right..'
            },

            {
                test: () => unjumble("I am the master of the unjumble! Look at me go!") === "!og em ta kooL !elbmujnu eht fo retsam eht ma I",
                message: '"' + (unjumble && unjumble("!og em ta kooL !elbmujnu eht fo retsam eht ma I")) + '" - not quite what they had expected to say.'
            }
        ]
    },

    {
        name: "Odds Out",
        intro: "2, 4, 6, 8! Who do we appreciate?",
        funcs: [{
                test: () => typeof removeOdds === 'function',
                message: "The crowd goes to start chanting, but need a function to help them work out the numbers."
            },

            {
                test: () => isArray(removeOdds([])),
                message: "The crowd goes to use the function, but they don't seem to be getting a list back."
            },

            {
                test: () => removeOdds([1, 2, 3, 4]).length,
                message: "It looks like the crowd have been a little too enthusiastic with their odds removals. There's nothing left!"
            },

            {
                test: () => {
                    return removeOdds && (() => {
                        for (x in removeOdds([0, 0, 0, 0])) {
                            if (isNaN(x)) return false
                        }
                        return true
                    })
                },
                message: "We hear confused sounds from the crowd. Looks like at least one item in their list was not a number."
            },

            {
                test: () => arrayEquals(removeOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]),
                message: 'The crowd starts chanting: "' + (removeOdds && isArray(removeOdds([1, 2, 3, 4, 5, 6, 7, 8])) && removeOdds([1, 2, 3, 4, 5, 6, 7, 8]).join(', ')) + '!" The commentators shake their heads in dismay.'
            },

            {
                test: () => arrayEquals(removeOdds([0, 1, 2, 3, 4, 5, 6, 7, 8]), [0, 2, 4, 6, 8]),
                message: 'Looks like they\'ve got the first list down, so they try adding another number this time: "' + (removeOdds && isArray(removeOdds([0, 1, 2, 3, 4, 5, 6, 7, 8])) && removeOdds([0, 1, 2, 3, 4, 5, 6, 7, 8]).join(', ')) + '!" Huh, not quite as simple as they thought.'
            },

            {
                test: () => arrayEquals(removeOdds([17, 12, 200, 0, -1, 1907232, 17, -42, 7]), [12, 200, 0, 1907232, -42]),
                message: "The crowd tries some more complex numbers, but it looks like they haven't quite got it yet."
            }
        ]
    },

    {
        name: "We Built this City",
        intro: "Finally, we welcome the next generation of athletes with this closing event:",
        funcs: [{
                test: () => typeof newAthlete === 'function',
                message: "It looks like we've got people lining up to join next year's JS Olympics, but no one to record their details! NewAthlete needs to be a function."
            },

            {
                test: () => typeof newAthlete() === 'object',
                message: "We need a record of their details people! There's no point taking their details if you don't save them anywhere, so make sure we get an Object back."
            },

            {
                test: () => {
                    let keys = Object.keys(newAthlete())
                    return (keys.includes('name') && keys.includes('age') && keys.includes('sport') && keys.includes('quote'))
                },
                message: "To sign up for next year, please ensure you have all your details written down on your entry form. We need your name, age, sport, AND quote."
            },

            {
                test: () => {
                    let a = newAthlete('Batman', 32, 'Fighting Crime', 'I\'m Batman')
                    return (a.name == 'Batman' && a.age == 32 && a.sport == "Fighting Crime" && a.quote == "I'm Batman")
                },
                message: "The details on your form should match those on your ID, please. It already looks like someone hasn't added them correctly."
            },

            {
                test: () => {
                    let a1 = {
                        name: 'Alma',
                        age: 'Eighty-one',
                        sport: 'Yoga',
                        quote: 'Keeping a growth mindset'
                    }
                    let b1 = {
                        name: 11,
                        age: 'Thirteen',
                        sport: 'Mind powers',
                        quote: 'Eggos?'
                    }

                    let a2 = newAthlete(a1.name, a1.age, a1.sport, a1.quote)
                    let b2 = newAthlete(b1.name, b1.age, b1.sport, b1.quote)

                    // for a given key, will check the copied value matches for both  a and b
                    let keyEqual = (key) => a1[key] == a2[key] && b1[key] == b2[key]

                    return keyEqual('name') && keyEqual('age') && keyEqual('sport') && keyEqual('quote')
                },
                message: "We need to make sure everyone is entered correctly no matter who they are, no one misses out on next year's event!"
            }
        ]
    }
]



// _____________________________________________
// This section runs the tests

let event

try {
    for (t in tests) {
        event = tests[t]
        for (i in event.funcs) {
            let f = event.funcs[i]
            if (!f.test()) throw new Error(f.message)
        }
        console.log(event.name + " ".repeat(30 - event.name.length) + "- COMPLETED")
    }
    console.log("\n\n       Well done!\n~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~\n")
    console.log(require('./rings'))
    console.log('\n~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~/~~\n')
} catch (e) {
    console.log("\n\n" + event.intro)
    console.log("  - " + event.name + " - \n")
    console.log(e + "\n")
}

function isArray(a) {
    return typeof a === 'object' && Array.isArray(a)
}

function arrayEquals(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2)
}

function getWinnerLog() {
    let oldLog = console.log
    let logStr = ""
    if (athleteArray.length) {
        let a = athleteArray[Math.floor(Math.random() * athleteArray.length)]

        if (Object.keys(a).includes("win") && typeof a.win === 'function') {
            console.log = function(str) { logStr = str };
            a.win()
            console.log = oldLog;
        }
    }

    return logStr
}