// array 

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["hanuman", "iron man"]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


// Array methods

// myArr.push(6)    // add (element)  to array
// myArr.push(7)   
// myArr.pop()      // remove last element from array

// myArr.unshift(9)   // add element from staring and cause work load on computer
// myArr.shift()


// console.log(myArr.includes(9));    // boolean type => if there => true if not => false
// console.log(myArr.indexOf(9));     // if not then => -1(i don't know)
// console.log(myArr.indexOf(3));     // if there will  print given that value => 3

// const newArr = myArr.join()

// console.log(myArr);      // output =>  [0, 1, 2, 3, 4, 5, 6]
// console.log(newArr);     //  output => 0,1,2,3,4,5,6   convert array into string
// console.log(typeof newArr);  // string


// slice , splice


console.log("A", myArr);  // output => A [0,1,2,3,4,5,6]

const myn1 = myArr.slice(1,3)   // .slice => display all value of range but does not include the last one of range

console.log(myn1);   //   output => [1,2]
console.log("B", myArr);  //  output => B [0,1,2,3,4,5,6 ]

const myn2 = myArr.splice(1,3)  // manupulates original aaray and cuts the element from orignal array to give output
console.log("C", myArr); 
console.log(myn2);