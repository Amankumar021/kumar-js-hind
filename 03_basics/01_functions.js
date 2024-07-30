


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

console.log(loginUserMessage("Aman"));