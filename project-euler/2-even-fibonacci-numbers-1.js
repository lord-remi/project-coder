// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

// Condition 1
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13
// ....

// Condition 2
// even-valued >>> num % 2

// let firstFi = 1;
// let nextFi = 2;
// let result;

// function FindFibonnaci() {
//     result = firstFi + nextFi;
//     firstFi = nextFi
//     nextFi = result
//     console.log(result)
// }

// FindFibonnaci()

let arrayFi = [1, 2]

for (let a = 0; a < 100; a++) {
    function FindFibonnaci() {
        let sum;
        sum = arrayFi[0] + arrayFi[1]
        arrayFi.push(sum)
    }
    FindFibonnaci()

    arrayFi.sort(function(a, b) {
        return b - a
    })

    if ((arrayFi.reduce((a, b) => a + b)) >= 4000000) {
        arrayFi.splice(0, 1)
        // console.log((arrayFi.reduce((a, b) => a + b)))
        break
    }
}
// console.log(arrayFi)

let evenTermSum = 0;
for (let b = 0; b < arrayFi.length; b++) {
    if (arrayFi[b] % 2 == 0) {
        evenTermSum = evenTermSum + arrayFi[b]
    }
}
console.log("evenTermSum", evenTermSum)
// console.log("Fibonacci array", arrayFi)


