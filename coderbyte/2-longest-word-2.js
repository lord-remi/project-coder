// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestWord(sen) { 
    let rawinput = sen;
    let input = rawinput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let array = input.split(" ");
  
    array.sort(function(a, b) {
      return b.length - a.length;
    });
  
  console.log(array[0]);
  }  
  
  LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~")