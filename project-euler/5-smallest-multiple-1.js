// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// divideArr = [1 - 10]
// smallest num = 2520

// divideArr = [1 - 20]
// smallest num = x?

let divideArr = []
for (a = 1; a <= 10; a++) {
    divideArr.push(a)
}

let minNum = 2*3*5*7;

for (b = minNum; b <= 2520; b++) {
    for (a = 0; a <= divideArr.length; a++) {
        let isSmallest = Boolean;
        if (b % divideArr[a] == 0) {
            isSmallest = true
        } else {
            isSmallest = false
            break
        }

        if (isSmallest) {
            console.log(b, divideArr[a], isSmallest)
        }
    }
}

// let isSmallest = true
// let inputNum = 2510

// let divideArr = []
// for (a = 1; a <= 10; a++) {
//     divideArr.push(a)
// }

// for (a = 0; a <= divideArr.length; a++) {
//     if (inputNum % divideArr[a] == 0) {
//         console.log(true, inputNum, divideArr[a])
//     } else {
//         console.log(false, inputNum, divideArr[a])
//     }
// }