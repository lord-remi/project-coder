// The sum of the squares of the first ten natural numbers is,
// 1^2+2^2+...+10^2=385

// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)^2=55^2=3025

// Hence the difference between the sum of the squares of the first ten natural numbers 
// and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let numArr = [];
for (x = 1; x <= 100; x++) {
    numArr.push(x)
}

let sumOfSquare = 0;
for (a = 0; a < numArr.length; a++) {
    sumOfSquare = sumOfSquare + Math.pow(numArr[a], 2)
}

let squareOfSum = 0;
const reducer = (a, b) => a + b;
squareOfSum = numArr.reduce(reducer)
squareOfSum = Math.pow(squareOfSum, 2)

let diffValue = squareOfSum - sumOfSquare;
console.log("diffValue", diffValue)