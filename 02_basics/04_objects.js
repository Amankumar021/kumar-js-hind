// const tinderUser = new Object()     // singleton object

const tinderUser ={}

tinderUser.id = "123@abc"
tinderUser.name="Aman"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aman",
            lastname:"kumar"
    
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b", }
const obj2 = {3: "a", 4:"b", }
const obj4 = {5: "a", 6:"b", }

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)   // .assign=> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object


// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"hm@email.com",
    },
    {
        id:1,
        email:"hm@email.com",
    },
    {
        id:1,
        email:"hm@email.com",
    },
    {
        id:1,
        email:"hm@email.com",
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));