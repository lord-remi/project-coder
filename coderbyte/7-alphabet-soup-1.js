// Have the function AlphabetSoup(str) take the str string parameter being passed 
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string.

// Example:
// Input: "coderbyte"
// Output: bcdeeorty
// Input: "hooplah"
// Output: ahhloop

function AlphabetSoup(str) {
    let input = str;
    let array = input.split("")

    array.sort() 
    console.log(array.join(""))
}

AlphabetSoup("coderbyte")
AlphabetSoup("hooplah")
