// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
//---------------------
// product of 2-digit number might be 3-digit (100) to 4-digit (9999)
// product of 3-digit number might be 5-digit (10,000) to 6-digit (999,999)

// 1. find palindrome number by checking from the largest number
// 2. reverse the order of number, and check if number is equal to reverse number
// 3. check if palindrome number is the product of two 3-digit numbers by divide it with 3-digit number from 100 to 999
// 4. if palindrome number divide 3-digit number without remainder
// 5. check if result is 3-digit number too
// 6.  print palindrome number and both 3-digit numbers in calculation
//---------------------

let palindromeNum = 0;

for (let a = 999999; a >= 10000; a--) {
    if (a.toString() !== a.toString().split("").reverse().join("")) {
        continue
    } else if (a.toString() === a.toString().split("").reverse().join("")) {
        for (let b = 999; b >= 100; b--) {
            if (a % b != 0) {
                continue
            } else if (a % b == 0) {
                if ((a/b).toString().length == 3) {
                    console.log(a, b, a/b)
                    return
                }
            }
        }
    }
}