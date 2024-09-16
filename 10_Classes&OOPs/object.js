// NEW KEY WORD   //LECTURE NO - 43


function multiplyBy5(num){
    this.num = num
    return num*5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));


console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}


createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25);
const tea  =  createUser("tea", 250);

chai.printMe()

/*

here's what happens behund the scenes when the new keyword is used:

A new object is created : The new keyword initiates the creation of new javascript object.

A prototype is linked : the newly created object gets linked to the prototype property of the constructor function. This means that it has acces to properties and methods defined on  the constructor's prototype.

The constructor is called : The constructor function is called with the specified arguments and this is bound to newly created object . if no explicit return value is specified from the constructor . JavaScript assumes this , the newly created object, to be the intended return value.

The new object is returned : After the constructor function has been called , if it does't return a non-primitive value (object, array , function, etc...), the newly created object is returned .

*/
