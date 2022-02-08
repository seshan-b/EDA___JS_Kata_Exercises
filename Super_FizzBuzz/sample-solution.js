// SAMPLE SOLUTION

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
    let newArr = []

    for (i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        newArr[i] = fizzbuzz(currentNum)
    }

    return newArr
}