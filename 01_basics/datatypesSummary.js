// primitive

// 7 types : string , Number, boolean, null, undefined, symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

// const bigNumber = 312145561515454522n


// refrence(non primitve)

// Array, Objects, Functions


const heros = [ "shaktiman", "naagraj", " ironman"];
 let myObj = {
    name: "aman",
    age: 20,
}

const myFunction = function() {
    console.log("hello world");
}
console.log(typeof heros);