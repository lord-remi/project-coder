// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function FirstReverse(str) { 

    // code goes here
    const input = readline();
    let array = input.split("");
    let restr = array.reverse();
    let output = restr.join("");
    return output; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));
  
  // coderbyte
  // c o d e r b y t e