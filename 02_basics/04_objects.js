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

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({}, obj1,obj2)   // .assign=> Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
console.log(obj3);