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
    Age: 2+"years",
    Gender: "Male"
}

console.log(dogInfo);
console.log(`dogInfo Data Type is an ${typeof (dogInfo)}`);


//Arithmetic Operators