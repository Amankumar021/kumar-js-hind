// const  coding = [ "js", " react", "python", "cpp"]

// const values =  coding.forEach( (item) => {
//      console.log(item);
//      return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);


// myNums.forEach( (num) => {
//     num > 4
// })


// console.log(myNums);


// const newNums = []


// myNums.forEach( (num) => { 
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



const data = [
    {name : "aman kumar", 
     age : 18, 
     experience  : 4,
     comapany : 'amanzon'
    },
    {name : "aditya kumar", 
     age : 19, 
     experience  : 4,
     comapany : 'flipcart'
    },
    {name : "shubham kumar", 
     age : 32, 
     experience  : 8,
     comapany : 'amanzon'
    },
    {name : "deva kumar", 
     age : 50, 
     experience  : 10,
     comapany : 'amanzon'
    },
    {name : "ashutosh kumar", 
     age : 18, 
     experience  : 4,
     comapany : 'flipcart'
    },
    {name : "sanjay kumar", 
     age : 34, 
     experience  : 10,
     comapany : 'amanzon'
    }
]

let reqData = data.filter( (umar) => umar.age > 20 )

// console.log(reqData);

reqData = data.filter( (umar) => {
    return umar.experience <= 8 && umar.comapany === "amanzon"

})
 
console.log(reqData);
