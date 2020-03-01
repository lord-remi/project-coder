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
    let alphabet = "abcdefghijklmnopqrstuvwxz";
    let vowels = "aiueo"
    let returnarray = [];

    for (b = 0; b < input.length; b++) {
        for (a = 0; a < alphabet.length; a++) {
            if (input[b] == alphabet[a]) {
                returnarray.push(alphabet[a + 1])
            } else if (input[b] === alphabet[24]) {
                returnarray.push(alphabet[0])
            }
        }
    }
    
    for (b = 0; b < returnarray.length; b++) {
        for (a = 0; a < vowels.length; a++) {
            if (returnarray[b] == vowels[a]) {
                returnarray[b] = (returnarray[b].toUpperCase())
            }
        }
    }

    console.log(returnarray.join(""))
}

LetterChanges("hello*3")
LetterChanges("fun times!")
LetterChanges("zawarudo*3")