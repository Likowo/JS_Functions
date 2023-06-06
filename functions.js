// (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x1,x2){
    if (x1 === x2){
        return x1
    }else if(x1 > x2){
        return x1
    }else return x2
}
console.log(maxOfTwoNumbers(9,9))
console.log(maxOfTwoNumbers(19,4))
console.log(maxOfTwoNumbers(3,25))

// const maxOfTwoNumbers = (num1,num2) => {
//     if(num1 === num2){
//         return num1
//     }else if(num1 > num2){
//         return num1
//     }else {
//         return num2
//     }
// }
// console.log(maxOfTwoNumbers(20,20))
// console.log(maxOfTwoNumbers(15,6))
// console.log(maxOfTwoNumbers(6,40))

// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThreethat = (num1,num2,num3) => {
    if(num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
       return num2
    }else{
       return num3
    }
}
console.log(maxOfThreethat(5,10,3))
console.log(maxOfThreethat(35,10,4))
console.log(maxOfThreethat(5,12,50))
console.log(maxOfThreethat(5,5,5))
console.log(maxOfThreethat(5,5,3))


// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise. // Parenthensis means () Parameters go in here and Curly brackets {} makes up the fxn body NB: The '.includes' Method works for both strings and Arrays
console.log("this is the 3rd question below")
const isCharAVowelthat  = (letter) => {
    const vowels = "aeiouy"
    if(vowels.includes(letter)){
        return true
    }else {
        return false
    }   
}
console.log(isCharAVowelthat("a"))
console.log(isCharAVowelthat("c"))



// let vowels = "aeiou"
// let letter = "a"
// console.log(  vowels.includes(letter)   )  

// let vowelsArray = ["a","e","i","o","u"]
// let alphab = "z"
// console.log(  vowelsArray.includes(alphab)   ) 

// console.log('look here',letter === vowels)


// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11. // We use a for loop in this scenerio
const sumArraythat = (arrayOfNums) => {
    let sum = 0
    for(let i=0; i<arrayOfNums.length; i++){
        sum =sum + arrayOfNums [i]
    }
    return sum
}
console.log(sumArraythat([2,5,9,1]))
console.log(sumArraythat([1,3,9,11]))   
console.log(sumArraythat([10,20,50,10])) 

// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
console.log("this is the 5th question below")
const multiplyArray = (prodOfArray) => {
    let product = prodOfArray[0]
    for(i = 1;i<prodOfArray.length; i++){
        product*= prodOfArray[i]
    }
    console.log(product)
}
  multiplyArray([3,2,2]) 
// console.log("this is the 5th question below")
// function multiplyArray([prodOfArray]){
//     let product = prodOfArray[0]
//     for(let i=1;i<prodOfArray.length; i++){
//        product*= prodOfArray[i]
//         console.log(product)
//     }
//     // return product   
// }
// console.log(multiplyArray([3,2,2]))

//======================



// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
// // Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// const reverseStr = (str) => {
//     let choppedWord = str.split("")
//     let reversedWord = choppedWord.reverse()
//       console.log(reversedWord)
// }
// reverseStr("window")


// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
// const  stringsLongerThan = (str,num) => {
//     let longerThan = []
//     str.forEach((word)) => {
//         if(word.length > num){
//           LongerThan.push(word)
//         }
//     }
//     console.log(longerThan)
// }
// stringsLongerThan(["bradcool","Ben","Charlie","mary"],5)
