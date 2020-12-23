//  Basic Data Types in JavaScript

//  1. Number: Any number, including numbers with decimals

// The following code logs the number 2020 to the console.
let currentYear = 2020
console.log (currentYear);
console.log(typeof(currentYear));



//  2. String:  Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ".

// the following code logs the combination of strings and numbers into the console.  Because the number is contained within the quotes it is considered a "string" data type and not a "number" data type.
let happyThought = "Christmas is 2 days away."
console.log (happyThought);
console.log("happyThought Data Type is "+ (typeof(happyThought)));



//  3. Boolean: : This data type only has two possible values— either true or false (without quotes) Like answering a yes or no question.

let isSnowing = false;
let clearSkies = true; 
console.log(isSnowing === clearSkies);
console.log ("isSnowing Data Type is "+ (typeof(isSnowing)));
console.log("clearSkies Data Type is "+ (typeof(clearSkies)));



//  4. Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes)
// You can empty an object by setting it to null:

let person = {
    firstName: "Sandy", 
    lastName: "Keller",
    Age: 22
}
console.log(person);
person = null
console.log(person);
console.log(`In JavaScript, the data type of null is listed as an ${typeof (person)}.`)



//  5. Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
let value;
console.log(value);
console.log(`value Data Type is ${typeof (value)}`);

//  6. Symbol: Unique identifiers, useful in more complex coding. To create a new primitive symbol, you write Symbol() with an optional string as its description:
let sym = Symbol("@");
console.log(sym);
console.log(`sym Data Type is ${typeof (sym)}`); 


//  7. Object: Object is a complex data type. Collections of related data. JavaScript objects are written with curly braces {}.  Object properties are written as name:value pairs, separated by commas. 
let dogInfo = {
    Name: "Diogi", 
    Breed: "NewFoundland",
    Age: 2+" years",
    Gender: "Male"
}

console.log(dogInfo);
console.log(`dogInfo Data Type is an ${typeof (dogInfo)}`);


//Arithmetic Operators: 
// An operator is a character that performs a task in our code. JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers.

// 1. Add: +
let sum = 5+10;
console.log(`The sum of 5 & 10 is ${(sum)}.`);

// 2. Subtract: -
let difference = 55-20;
console.log(`The difference between 55 & 20 is ${(difference)}.`);

// 3. Multiply: *
let product = 10*2;
console.log(`The product of 10 multiplied by 2 is ${(product)}.`);

// 4. Divide: /
let quotient = 10/5;
console.log(`The quotient of 10 divided by 5 is ${(quotient)}.`);

// 5. Remainder or Modulo/Modulus: %
// The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.
let modulo = 11%3;
console.log(`The remainder of 11 modulo 3 is ${(modulo)}.`);



//OutPut
// JavaScript can "display" data in different ways:

// 1. Writing into an HTML element, using innerHTML.
// It is not advised to use innerHTML in JavaScript because innerHTML content is refreshed every time and thus is slower. There is no scope for validation in innerHTML and, therefore, it is easier to insert rogue code in the document and, thus, make the web page unstable.


// 2. Writing into the HTML output using document.write().


// 3. Writing into an alert box, using window.alert().
alert("Hello World!");

// 4. Writing into the browser console, using console.log().
console.log("The sky is blue");



/*
Comments
As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs.
 There are two types of code comments in JavaScript:
*/

// 1. A single line comment will comment out a single line and is denoted with two forward slashes "//" preceding it or can be used to comment after the line of code.

//********** Example of a Single Line Comment*****************


// 2. A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.

/*

*****This is an example of a***** 
*****multi-line comment.***** 
*****This will not run.*****

*/
//You can also comment something out in the middle of a line of code:

console.log("Age:"+/*DON'T PRINT THIS!*/ 8); 



// Variables: a variable is a container for a value.  They label and store data in memory. There are only a few things you can do with variables:

// Create a variable with a descriptive name.
// Store or update information stored in a variable.
// Reference or “get” information stored in a variable.

// 1. var: short for variable, is a JavaScript keyword that creates, or declares, a new variable. The use of var is no longer recommended.
var dogName = "Tilly";
console.log(`The dog's name is ${(dogName)}.`);

// // 2. Const: the const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can store any value in a const variable.
// a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
// Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError
const userName = "Mary";
console.log(userName);

// 3. let: the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. When using let and var we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined.
let phoneBrand = "Samsung";
console.log(phoneBrand);




// Mathematical Assignment Operators: can use variables and built-in mathematical operators to calculate new values and assign them to a variable. 
//  (+=; -=; *=; & /=)
let num=5;
num = num+1;
console.log(num);

//can be rewritten as
num+=1;
console.log(num);



// The Increment and Decrement Operator: (commonly used in loops)
// 1. ++ the increment operator will increase the value of the variable by 1.
let childAge = 15;
childAge++;
console.log(childAge);

// 2. -- The decrement operator will decrease the value of the variable by 1.
let bankBalance = 556;
--bankBalance;
console.log(bankBalance);


//Adding Strings

// 1. String Concatenation: The + operator can be used to combine two string values even if those values are being stored in variables
let playerscore = 50;
console.log("Great Job! You scored "+(playerscore)+" points.");

// 2. String Interpolation: Template Literals
// we can insert, or interpolate, variables into strings using template literals. A template literal is wrapped by backticks with the variable wrapped in curly brackets `${()}`
let playerscore2 = 65;
console.log(`Great Job! You scored ${(playerscore2)} points.`);
