// Anything that is enclosed in double quote is a string

var myFirstString = "I Love Javascript ";

console.log(typeof myFirstString);

var mySecondString = "I love Web Development too";
console.log(typeof mySecondString);

// What is string itself contains double-quotes ???

// var doubleQuoteString = "this is a string in "Javascript" programming language";    // This will give error

var doubleQuoteString = "this is a string in \"Javascript\" programming language";             // We can add a \ slash at the start and end of double quoted substring . It also works with sinle quotes

console.log("doubleQuoteString :   ",doubleQuoteString);

var singleQuoteString = 'this is a string in \'Javascript\' programming language'; // We can add a \ slash at the start and end of double quoted substring . It also works with sinle quotes
console.log("singleQuoteString :   ",singleQuoteString);

var singleInDoubleString = "This is 'Javascript' string";       // No error is generated here because double quote string has enclosed single quote string and consideres it as string too;
console.log("singleInDoubleString :   ",singleInDoubleString);

var doubleSingleString = 'This is "Javascript" string';         // It works same way for double quotes enclosed in single quotes   
console.log("doubleSingleString :   ",doubleSingleString);