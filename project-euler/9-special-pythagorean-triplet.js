// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// a < b < c
// a^2 + b^2 = c^2
// a + b + c = 1000

// (a < b && b < c)
// Math.pow(a, 2) + Math.pow(b, 2) = Math.pow(c, 2)
// a + b + c = 1000

let a = 0;
let b = 0;
let c = 0;

for (a = 1; a < 1000; a++) {
    if (a < b && b < c) {
        if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
            console.log(a, b, c)
        } else {
            break
        }
    } else {
        break
    }
}