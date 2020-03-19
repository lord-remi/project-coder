// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// divideArr = [1 - 10]
// smallest num = 2520

// divideArr = [1 - 20]
// smallest num = x?

//------------------
// 1. have an array of number from 2-20. (because any num can divide 1 w/o remainder)
// 2. starting from product of all prime number from 1-20, which is 3, 5, 7, 13, 17, 19 & num 10 (4,408,950)
// 3. check if number can evenly divisible by all of the numbers from 2-20 by looping it through array above
// 4. if one case fail, skip to next number
// 5. print found number
//------------------

let divideArr = [];
for (let a = 2; a <= 20; a++) {
    divideArr.push(a)
}

for (let b = 4408950; ; b++) {
    let isEvenlyDivisible = true;
    for (let a = 0; a < divideArr.length; a++) {
        if (b % divideArr[a] != 0) {
            isEvenlyDivisible = false
            continue
        }
    }

    if (isEvenlyDivisible) {
        console.log(b)
        return
    }
}