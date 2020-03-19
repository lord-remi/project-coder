// Have the function AlphabetSoup(str) take the str string parameter being passed 
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string.

// Example:
// Input: "coderbyte"
// Output: bcdeeorty
// Input: "hooplah"
// Output: ahhloop

function AlphabetSoup(str) {
    return str.split("").sort().join("")
    // let input = str;
    // let array = input.split("").sort().join("")

    // console.log(array)
    // array.sort() 
    // console.log(array.join(""))
    // return output
}

AlphabetSoup("coderbyte")
AlphabetSoup("hooplah")
