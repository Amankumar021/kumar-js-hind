


function sayMyName(){
    console.log("H");
    console.log("O");
    console.log("p");
    console.log("L");
}
// sayMyName()

// function addTwoNumbers (number1, number2){                    // (aja,dsakl) => parameters
//    console.log( number1 + number2);     

// }
function addTwoNumbers (number1, number2){                    // (aja,dsakl) => parameters
//    let result = number1 + number2
//    return result 

return number1 + number2
  

}
const result = addTwoNumbers(9,8)  // Arguments
    
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Aman"));

// console.log(loginUserMessage());   // preefined value will asign that is "sam"
// console.log(loginUserMessage("Aman"));  // given value will assign thst is "Aman"


function calculateCartPrice(val1, val2, ...num1){      // (...num1) => spread Operator
       return num1
}

// console.log(calculateCartPrice(200,300,500, 642));


const user = {
    username:"Aman",
    price:209
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myNewArray = [200, 300, 500] 

function returnSecondValue(getArray){
    return  getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,900,800,525]));