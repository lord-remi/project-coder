// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Example
// Input: "hello*3"
// Output: Ifmmp*3

// Input: "fun times!"
// Output: gvO Ujnft!


function LetterChanges(str) {
    let input = str;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let vowels = "aiueo";
    let returnarray = [];

    for (let b = 0; b < input.length; b++) {
        for (let a = 0; a < alphabet.length; a++) {
            if (input[b] == alphabet[a]) {
                if (vowels.includes(alphabet[a + 1])) {
                    returnarray.push(alphabet[a + 1].toUpperCase())
                } else {
                    returnarray.push(alphabet[a + 1])
                }
            } else if (input[b] === alphabet[25]) {
                returnarray.push(alphabet[26])
            }
        }
    }

    console.log(returnarray.join(""))
}

LetterChanges("hello*3")
LetterChanges("fun times!")