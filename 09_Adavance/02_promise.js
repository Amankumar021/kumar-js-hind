// promises => are objects 
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

/*
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/


const promiseOne = new Promise(function(resolve , reject ){
    // do an async task 
    // DB calls , cryptography, network
    setTimeout(function()  {
       console.log('Async task is complete');
       resolve()
        
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise Consumed");
    
})

//     // 2nd method

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("promise two is resolved");
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "chai" , email : "aman@g,ail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"aman", password: "42312", email:"aan.gmail.com"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})
// chaining

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{               // used in database connection 
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either reolved or rejected"))

/*
finally(onfinally?: (() => void) | null | undefined): Promise<void>
The callback to execute when the Promise is settled (fulfilled or rejected).


Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

@returns — A Promise for the completion of the callback
*/

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"JavaScript", password: "42312", })
        }else{
            reject('ERROR : JS went wrong')
        }
    }, 1000);
})

// async await method of promise

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    
    console.log(response);
    
  } catch (error) {
    console.log(error); 
  }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
        
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('ERR:', error);   
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))    