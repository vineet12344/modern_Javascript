var myFirstString = "This is my first string in JavaScript";

// 1) length    : returns length of string  

console.log("Length of string :",myFirstString.length);  // also counts spaces

// 2) indexOf(string you want to find)  : Returns index position of first character of given sub-string

console.log("index of string: ",myFirstString.indexOf("JavaScript"));       // this method is case sensitive
console.log("index of string: ",myFirstString.indexOf("my"));               


// 3) lastIndexOf("string to search")  : returns last index of given substring

console.log("last index of string: ",myFirstString.lastIndexOf("JavaScript"));
console.log("last index of string: ",myFirstString.lastIndexOf("string"));

// 4) slice(START,END)  : returns the part of string having START and END

console.log("slice method : ",myFirstString.slice(0,19));       // String is nothing but an array 
console.log("slice method : ",myFirstString.slice(0,5));        
console.log("slice method : ",myFirstString.slice(-10));      // can be used with reversed indexing too 


// 5) substring(START,END)  : returns substring 

console.log("substring method : ",myFirstString.substring(0,19));       
console.log("substring method : ",myFirstString.substring(0,5));        
console.log("substring method : ",myFirstString.substring(-10));  


// 6) toUpperCase() : convert strign in uppercase format

console.log("toUpperCase() : ",myFirstString.toUpperCase());

// 7) toLowerCase() : convert strign in lowercase format

console.log("toLowerCase() : ",myFirstString.toLowerCase());


// 8) concat()  : Merges two strings
var secondString = " added String ";
console.log("concat() :",myFirstString.concat(" ",secondString));

// we can also use + opreator
console.log("Using + opreator  :",myFirstString+" "+secondString);

// 9) trinm() : it removes extra space
var stringWithSpaces = "    This is a string with spaces     ";
console.log("trim() : ",stringWithSpaces.trim());

// 10) charAt() : returns the character at the given index position

console.log("chatAt() position 8 : ",myFirstString.charAt(8));

// 11) split()  : splits the string on the basis of argument passed

console.log("split()  :",myFirstString.split(" "));



