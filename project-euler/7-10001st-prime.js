// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

// array [2, 3, 5, 7, 11, 13]
// index 1- 2- 3- 4- 5- 6

let arrNum = [];
let arrPrime = [];
searchLimit = 10000;

for (a = 2; a <= searchLimit; a++) {
    arrNum.push(a)
    arrNum.sort((a, b) => b - a)
    
    let isPrime = true;
    for (b = 0; b < arrNum.length; b++) {
        if (arrNum[0] != arrNum[b] && arrNum[0] % arrNum[b] == 0) {
            isPrime = false
            break
        }
    }
    
    if (isPrime) {
        arrPrime.push(arrNum[0])
    }
}

console.log("10001st prime is", arrPrime[1000])
