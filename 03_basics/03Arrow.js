const user = {
    username: "Aman",
    price : 999,


    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // .this => refer to current context (that is within this '{}'
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="Aman"
//     console.log(this.username);
    
// }

// chai()   // method used for calling a function    // output=> undefined

// const chai = function (){     // arrow function
//     let username = "aman"
//     console.log(this.username);
    
// }

// chai()  //  output=> undefined


const chai =  () =>{    // arrow function
    let username = "aman"
    console.log(this.username);
}

// chai()    // ouput => undefined

// const addTwo = (num1,num2) => {   //basic arrow function
//     return num1 + num2  // explicit return
// }
// console.log(addTwo(3,8));

// const addTwo = (num1,num2) =>   num1 + num2     // implicit return => maine maan liya 

// const addTwo = (num1,num2) =>   (num1 + num2)

// const addTwo = (num1,num2) =>   {username : "aman"}  // undefined value (without perinthisis)


const addTwo = (num1,num2) =>  ( {username : "aman"})

console.log(addTwo(3,8));

const myArray = [ 1,2,3,4,4,5]
 myArray.forEach(function(){})
 myArray.forEach(() => {})
