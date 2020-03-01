// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
// For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Use the Parameter Testing feature in the box below to test your code with different arguments.

function FirstFactorial(num) { 

    // code goes here
    const n = readline();
    let i = 1
    let result = 1;
  
    for (i; i <= n; i++) {
      // console.log(i, a)
      result = result * i;
    }
    return result; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));
  
  // n = 5
  // !n
  // 1*2 = 2
  // 2*2 = 4
  // 3*4 = 12
  // 4*12 = 64
  // 5*64 = 320