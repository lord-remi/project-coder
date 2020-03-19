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
    let firstNum;

    for (let b = 0; b < input.length; b++) {
        if (Number.isInteger(Number(input[b]))) {
            if (!firstNum) {
                firstNum = Number(input[b])
                continue
            }
            
            if (b - input.indexOf(firstNum) < 4) {
                continue
            }

            let secondNum = Number(input[b])
            if (firstNum + secondNum <= 10) {
                let questionMarkCheckArray = input.slice(input.indexOf(firstNum), b)
                if (questionMarkCheckArray.match(/\?/g).length === 3) {
                    return true
                } else {
                    firstNum = Number(input[b])
                }
            } else {
                firstNum = Number(input[b])
            }
        }
    }
    return false
}

// QuestionsMarks("aa6?9") 7 4 3
console.log(QuestionsMarks("acc?8???sss?3r????r1???5"))
