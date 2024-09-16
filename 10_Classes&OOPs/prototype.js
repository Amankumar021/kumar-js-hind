// let no - 43     // time stamp 27:00

// let myName = "Aman     "
// let myChanenl = "chau     "



// console.log(myName.trim().length); // low IQ  things


let myHeros = ["thor", "raja","spuderman"];

let heroPower = {
    thor : "hammer",
    raja : "chair",
    spuderman : "sling",

    getspudermanPower : function(){
        console.log(`spidy power is ${this.spuderman}`);
        
    }
}

Object.prototype.aman = function(){
    console.log(`Aman is present in all objects`);
    
}

Array.prototype.heyAman = function(){
    console.log(`Aman kaisan ba `);
    
}

// heroPower.aman()

// myHeros.aman()
// myHeros.heyAman()
// heroPower.heyAman()




// inheritance

const User = {
    name : "Aman",
    email: "aman.amazon.com"
}

const Teacher = {
    makeVideo : true
}
const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__:TeacherSupport,
}

Teacher.__proto__ = User   // old method 

//modern syntax
Object.setPrototypeOf(TeacherSupport , Teacher)

let anotherUsername = "ChaiaurCode          "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  
    console.log(`true length is : ${this.trim().length}`);
    
    
}

anotherUsername.trueLength();
"aman        ".trueLength();