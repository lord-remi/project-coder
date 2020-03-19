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
    let output = input;

    for (let a = 0; a < alphabet.length; a++) {
        if (input.includes(alphabet[a])) {
            if (alphabet[a + 1] == undefined) {
                output = output.replace(new RegExp(alphabet[a], 'g'), alphabet[0].toUpperCase())
            } else {
                output = output.replace(new RegExp(alphabet[a], 'g'), alphabet[a + 1])
                if (vowels.includes(alphabet[a + 1])) {
                    output = output.replace(new RegExp(alphabet[a + 1], 'g'), alphabet[a + 1].toUpperCase())
                } 
            }
        }
    }

    console.log(output)
}

LetterChanges("hello*3")
LetterChanges("zoo")
LetterChanges("fun times!")