// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// product of 2-digit nums length: 3-4 digits
// product of 3-digit nums length:  5-6 digits
// find num string if str == reverse str
// verify if it's made from the product of two 3-digit numbers
// get largest num

let palindromicArray = []

for (a = 100; a <= 9999; a++) {
    let b = a.toString().split("")

    if (a.toString() === b.reverse().join("")) {
        palindromicArray.push(a)
    }
}

console.log(palindromicArray.sort((a, b) => b - a))

for (a = 99; a >= 10; a--) {
    for (b = 0; b <= palindromicArray.length; b++) {
        let x = (palindromicArray[b] / a)
        if (x.toString().length == 3) {
            console.log(palindromicArray[b], a, "result", x)
            return
        }
    }
}