const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " Value");  // not to prefer said by guruji

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('aman-ks')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);          // length of string(in number)
// console.log(gameName.toUpperCase());   // print string in upperCase
console.log(gameName.charAt(4));          // display at this number which letter has taken
console.log(gameName.indexOf('k'));       // dsiplay what number is assiged to a letter


const newString =  gameName.substring(0,4)  // 4th value in not included 
console.log(newString);                    // 4th value in not included 

const anotherString = gameName.slice(-5, 4) // can assign negative value by which it starts counting from back to give results
console.log(anotherString);

const newStringOne = "  aman   "
console.log(newStringOne);     // print input as it is given


console.log(newString.trim());  // trim unnecessary space given in it then print the value 
 //  To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

 const url = "https://hitesh.com/hitesh%20Chaoudhary"

console.log(url.replace('%20', '-'));     // used to replace
console.log(url.includes('hitesh'));     // used to know the desired input is there or not  // if there is => true   if not => false

console.log(gameName.split('-'));