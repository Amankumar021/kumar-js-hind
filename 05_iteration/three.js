// for of => Loop(array specific loop)

// ["", "", ""]
// [{}, {}, {}]

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}


// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United state of america")
// map.set('CHI', "china")
// map.set('IN', "India")



// console.log(map);     // map are used for unique value , does not print the common value


for (const [key, value] of map) {
    // console.log(key,':-' , value);
    
}


const myObject = {
    game1: 'NFS',
    game2: 'Spider Man'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-" , value);
    
// }   // does  not work for Objects ( not iterable )

// map


// const map = new Map()     // maps are not iteratable
// map.set('IN', "India")
// map.set('USA', "United state of america")
// map.set('CHI', "china")
// map.set('IN', "India")

for (const key in map) {
    console.log(key);
    
}


  

