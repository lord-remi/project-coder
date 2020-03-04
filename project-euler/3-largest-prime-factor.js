// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Find prime number array [2, 3, 5, 7, 13, 29, ....]
// Divide the number piece by piece

let arrNum = [];
let arrPrime = [];
searchLimit = 10000;

numInput = 600851475143;

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

// console.log("arrNum", arrNum)
// console.log("arrPrime", arrPrime)

for (a = 0; a < arrPrime.length; a++) {
    if (numInput % arrPrime[a] == 0) {
        console.log(arrPrime[a])
    } 
}