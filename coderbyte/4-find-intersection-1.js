// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma-separated numbers sorted in ascending order, 
// the second element will represent a second list of comma-separated numbers (also sorted). 
// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
// If there is no intersection, return the string false.

// For example: if strArr contains ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output should return "1,4,13" because those numbers appear in both strings. 
// The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.

function FindIntersection(strArr) { 

    // code goes here  
    let input = [];
    input = strArr;
    let array1 = input[0].split(",")
    let array2 = input[1].split(",")
    let returnarray = []
    // console.log(typeof array1[0])
    // console.log(array1)
    // console.log(array2)
  
    for (a = 0; a < array1.length; a++) {
      for (b = 0; b < array2.length; b++) {
        if (array2[b] === array1[a]) {
          returnarray.push(array2[b])
          array2.splice(b, 1)
          break
        }
      }
    }
  
    console.log(returnarray.toString().replace(/ /g,""))
  }
     
  // keep this function call here 
  FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);
  
  // 1, 3, 4, 7, 13
  // 1, 2, 4, 13, 15
  // >>> 1, 4, 13