// FizzBuzz (Super Edition)

function fizzbuzz(num) {

    if (num % 15 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "Fizz"
    } else if (num % 5 == 0) {
        return "Buzz"
    } else {
        return num
    }

}

function super_fizzbuzz(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; i++) {

        let currentNumber = arr[i];
        newArray[i] = fizzbuzz(currentNumber);
    }

    return newArray;

}


// __________________________________________
// Test Code:  Do not alter code below this line.

const tests = [{
        actual: fizzbuzz(7),
        expected: 7,
        message: "fizzbuzz should return the number that is passed to it (when not divisible by 3 or 5)"
    },

    {
        actual: fizzbuzz(17),
        expected: 17,
        message: "fizzbuzz should return the number (non multiple) that is passed to it"
    },

    {
        actual: fizzbuzz(6),
        expected: 'Fizz',
        message: "if the number is a multiple of three, fizzbuzz should return the string 'Fizz'"
    },

    {
        actual: fizzbuzz(42),
        expected: 'Fizz',
        message: "if the number is a multiple of three, fizzbuzz should return the string 'Fizz'"
    },

    {
        actual: fizzbuzz(5),
        expected: 'Buzz',
        message: "if the number is a multiple of five, fizzbuzz should return the string 'Buzz'"
    },

    {
        actual: fizzbuzz(40),
        expected: 'Buzz',
        message: "if the number is a multiple of five, fizzbuzz should return the string 'Buzz'"
    },

    {
        actual: fizzbuzz(15),
        expected: 'FizzBuzz',
        message: "if the number is a multiple of three AND five, fizzbuzz should return the string 'FizzBuzz'"
    },

    {
        actual: fizzbuzz(105),
        expected: 'FizzBuzz',
        message: "if the number is a multiple of three AND five, fizzbuzz should return the string 'FizzBuzz'"
    },

    {
        actual: super_fizzbuzz([1, 2]),
        expected: [1, 2],
        message: "When given the array [1, 2] super_fizzbuzz should return the array [1, 2]."
    },

    {
        actual: super_fizzbuzz([3, 7]),
        expected: ["Fizz", 7],
        message: 'When given the array [3, 7] super_fizzbuzz should return the array ["Fizz", 7].'
    },

    {
        actual: super_fizzbuzz([1, 5]),
        expected: [1, "Buzz"],
        message: 'When given the array [1, 5] super_fizzbuzz should return the array [1, "Buzz"].'
    },

    {
        actual: super_fizzbuzz([1, 3, 5]),
        expected: [1, "Fizz", "Buzz"],
        message: 'When given the array [1, 3, 5] super_fizzbuzz should return the array [1, "Fizz", "Buzz"].'
    },

    {
        actual: super_fizzbuzz([30]),
        expected: ["FizzBuzz"],
        message: 'When given the array [30] super_fizzbuzz should return the array ["FizzBuzz"].'
    },

    {
        actual: super_fizzbuzz([]),
        expected: [],
        message: "When given an empty array, super_fizzbuzz should return an empty array."
    },

    {
        actual: super_fizzbuzz([-7, 0, 4.2, -3]),
        expected: [-7, "FizzBuzz", 4.2, "Fizz"],
        message: 'super_fizzbuzz should return a correct array when given any array of numbers.'
    }
];


import { assert } from "./utils";


function testAll() {
    tests.forEach((f, i) => {
        assert(i + 1, f.message, f.expected, f.actual)
    })
    console.log('Woo!')
}

testAll()