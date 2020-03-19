// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Find prime number array [2, 3, 5, 7, 13, 29, ....]
// Divide the number piece by piece

// 1. have an empty prime array 
// 2. consider every number from 2 if it is a PrimeNumber
// 2.a. check natural number from 1 to input / 2
// 3. check if input number divide current number without remainder, then check if
// 4. perform check if current number is really a prime number, by checking if current number can divide other Number without remainder
// 5. if yes, current number is not a prime number, if no, then add it into prime array
// 6. print the last index of prime array

// -----------------------------

function GetLargestPrime(input) {
    let primeArr = [];
    
    for (let a = Math.round(input/2); a > 3; a--) {
        let isPrime = true;
        if (input % a == 0) {
            for (let b = 1; b <= Math.round(a/2); b++) {
                if (b == 1) {
                    continue
                }

                if (a % b == 0) {
                    isPrime = false
                    break
                }
            }

            if (isPrime) {
                return a
            }
        }
    }
}

console.log(GetLargestPrime(13195))
// GetLargestPrime(600851475143)

