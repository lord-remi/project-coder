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

    for (a = 0; a < validateNum.length; a++) {
        let validateArray = validateNum.slice([a])
        console.log("validateArray", validateArray)
        for (b = 0; b < validateArray.length; b++) {
            if (Number(validateNum[a]) + Number(validateArray[b]) <= 10) {
                console.log((input.indexOf(validateNum[a])), input.indexOf(validateArray[b]))
                let questionMarkCheckArray = input.slice(input.indexOf(validateNum[a], input.indexOf(validateArray[b])))
                console.log(questionMarkCheckArray)
            } else {
                console.log(false)
            }
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

// [ '7', '3', '1', '5' ]
// 7 + 3 | 7 + 1 | 7 + 5   
// 3 + 1 | 3 + 5           
// 1 + 5                   

// >>> x1 + x2 | x1 + x3 | x1 + x4
// >>> x2 + x3 | x2 + x4
// >>> x3 + x4