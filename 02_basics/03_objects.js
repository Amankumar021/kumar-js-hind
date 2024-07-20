// objects
// two methods of decleration 
// singleton (constructor) //literal 

//object.create 
 // boject literal

const mySym = Symbol("key1")



const JsUser = {
    name: "Aman",
    "full name ": "Aman kumar",
    [mySym] : "mykey1",
    age : 18,
    location : "prayagraj",
    email: "aman55336@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays :["Monday", "Friday"]
}

// console.log(JsUser.email);     // not a correct way 
// console.log(JsUser["email"]);  // correct way
// console.log(JsUser["full name "]);
// console.log(JsUser[mySym]);

JsUser.email ="chalnaBe55@gmail.com"
// Object.freeze(JsUser)                // Object on which to lock the attributes.  // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "amak@55.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User!");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User!, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




// impportant note => most of the time while ccessing value need to use '.' only rather then[] , but is some cases have to use this[] while accesssing value.

