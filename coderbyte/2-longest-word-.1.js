// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestWord(sen) { 

    // code goes here  
    let rawinput = readline();
    let input = rawinput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let array = input.split(" ");
    let arrayNum = [];
  
    for (i = 0; i < array.length; i++) {
      arrayNum.push(array[i].length)
    }
  
    let num = arrayNum.indexOf(Math.max(...arrayNum))
    return array[num]
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));
  
  // "Argument goes here"
  // [ Argument, goes, here ]
  // [ 8, 4, 4 ]
  // 8
  // Argument 
  
  // console.log(array.length)
  // console.log(array[0].length)
  // console.log(array[1].length)
  // console.log(array[2].length)