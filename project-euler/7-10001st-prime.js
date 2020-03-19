// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

// array [2, 3, 5, 7, 11, 13]
// index 1- 2- 3- 4- 5- 6

//----------------------
// 1. Check & List out all prime Number with condition - numbers that Prime can be only divisible w/o remainder are 1 and itself
// 2. Add founded prime number into an array 
// 3. Stop action when array has 10001 elements
// 4. Print 10001st element
//----------------------

let arrNum = [];
let arrPrime = [];

for (a = 2; ; a++) {
    arrNum.push(a)
    
    let isPrime = true;
    for (b = 0; b < arrNum.length; b++) {
        if (arrNum[arrNum.length - 1] != arrNum[b] && arrNum[arrNum.length - 1] % arrNum[b] == 0) {
            isPrime = false
            continue
        }
    }
    
    if (isPrime) {
        arrPrime.push(arrNum[arrNum.length - 1])
    }

    if (arrPrime.length == 10001) {
        console.log("10001st prime is", arrPrime[arrPrime.length - 1])
        return 
    }
}