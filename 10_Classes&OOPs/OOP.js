// Object literals

const user= {
    username:"aman",
    loginCount : 9,
    signedIn : true,

    getUserDetail:function(){
        // console.log("Got user detail from database");  
        // console.log(`username : ${this.username}`);
        console.log(this);   // all detail avialable
        
         
    }
}

const user2= {
    username:"aman",
    loginCount : 9,
    signedIn : true,

    getUserDetail:function(){
        // console.log("Got user detail from database");  
        // console.log(`username : ${this.username}`);
        console.log(this);   // all detail avialable
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);  // => {} nothing in global context

//  constructor => adding new varibles two auto fetch the value accodingly
function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${username}`);
        
    }

    // return this
}

// const userOne =  User("zaman", 12, true)  
// const userTwo =  User("aman", 11, false)   // not a good method values are overwritted that is userOne value is replaced by userTwo values 


const userOne = new User("zaman", 12, true)  
const userTwo = new User("aman", 11, false)   // adding 'new' before decleration create new space(object) for data to store and prevents thje overwriting of data  

console.log(userOne);
console.log(userTwo);        //call back(CB)
