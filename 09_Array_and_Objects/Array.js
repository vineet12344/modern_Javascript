var array1 = [1,2,3,4,5,6,7,8,9]
var names = ["Vineet","Goku","Vegeta","Jacob","JOJO"]

console.log(names)
console.log(names[1])
console.log(names[0])
console.log(names[4])

names[0] = "VINEET_CHAN"
console.log(names)

names[6] = "Marshmellow"
console.log(names)

names[15] = "Sawako"
console.log(names)

names[names.length] = "Picollo"
console.log(names)

names.push("Jack")
console.log(names)

names.pop();
console.log(names)
var poppedName = names.pop();
console.log(poppedName)




// -----------------------  Arrays Part 2: -------------------------- 

names.splice(3,0,"Nigger","Asian")
console.log(names)

names.splice(0,0,"BIll Gates")
console.log(names.toString())

console.log(names.splice(0,5))

// Concatenation :: 

var neko = ["Kittu 1","kittu 2","Kittu 3","Kittya"];
var oneArray = names.concat(neko);
console.log(oneArray)



oneArray.sort();
console.log(oneArray)

oneArray.reverse();
console.log(oneArray)



