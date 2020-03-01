// Have the function QuestionsMarks(str) take the str string parameter, 
// which will contain single digit numbers, letters, and question marks, 
// and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
// If so, then your program should return the string true, otherwise it should return the string false. 
// If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true 
// because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

// Example
// Input: "aa6?9"
// Output: false

// Input: "acc?7??sss?3rr1??????5"
// Output: true

// num + num <= 10
// num ??? num

// >>> identify if there is num1 & num2 and num1 + num2 <= 10
// >>> locate num position in Array
// >>> array.slice(position-num1, position-num2) 
// >>> check if there is exactly 3 ??? in new array


function QuestionsMarks(str) {
    let input = str;
    let num = "123456789";
    let validateNum = []

    for (b = 0; b < input.length; b++) {
        for (a = 0; a < num.length; a++) {
            if (input[b] === num[a]) {
                validateNum.push(input[b])
            }
        }
    }

    console.log(validateNum)
    for (a = 0; a < validateNum.length; a++) {
        if (validateNum[a] + validateNum[a + 1] <= 10) {

        }
    }

}

// QuestionsMarks("aa6?9")
QuestionsMarks("acc?7??sss?3rr1??????5")

// [ '7', '3', '1', '5' ]
// turn 1 - 7 3 1 5
// turn 2 -   3 1 5 7
// turn 3 -     1 5 7 3 
// turn 4 -       5 7 3 1