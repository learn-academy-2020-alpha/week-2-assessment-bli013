// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"
// Create a function called isThreeAFriend that takes in 1 arg and === 3%
isThreeAFriend = (num) => {
    if (num % 3 === 0){
        return `${num} is divisible by three`
    } else{
        return `${num} is not divisible by three`
    }
}
console.log(isThreeAFriend(num1))
console.log(isThreeAFriend(num2))
console.log(isThreeAFriend(num3))




// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//create a function called capIt that takes in an array of strings
capIt = (array) => {

    let outPutArray= []
// using for loop to pull one word at a time
    for(let i=0; i < array.length; i++){
    // then to split the string into individual letters and put it in an array
        let wordArr = array[i].split("")
    // then use the uppercase method to capitalize index 0
        wordArr[0]= wordArr[0].toUpperCase()
        let wordJoin = wordArr.join("")

        outPutArray.push(wordJoin)
    }
        return outPutArray
}
console.log(capIt(randomNouns))





// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// create a function called orgNumOnly
orgNumOnly = (arr) => {
// map method for finding num only (typeof method)
    let orgArr= arr.filter(el => typeof el === "number" )
// .sort(el => (a, b) {return a-b}) to organize numbers
    return orgArr.sort((a, b)=> a-b)
}

console.log(orgNumOnly(mixedDataArray))





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// create a function called winningVowel that passes a str as an argument
winningVowel = (str) => {
  // use a for loop to run through the string
  for (let i=0; i<str.length; i++){
  // create a new variable to set to charAt method
  let indOf = str.charAt(i);
  //set condition for finding vowel and either return
  if ("AEIOUaeiou".indexOf(indOf) != -1)
    return str.indexOf(indOf);
  }
  return "no vowels.";
}

console.log(winningVowel(vowelTester1))
console.log(winningVowel(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
//create a function called favCalc with 3 args (num1,op,num2)
favCalc = (num1,op1,num2) => {
  if(op1 === "*")
    return num1 * num2
  else if
    (op1 === "+")
    return num1 + num2
  else if
    (op1 === "-")
    return num1 - num2  
  else if
    (op1 === "/" && num2 !== 0)
    return num1 / num2
  else
    return "Can't devide by 0!"
}




// Uncomment and use the following console logs to test your function
console.log(favCalc(3, "*" ,9))
// Expected output: 27

console.log(favCalc(16, "+" ,3))
// Expected output: 19

console.log(favCalc(89, "/" ,0))
// Expected output: "Can't divide by 0!"
