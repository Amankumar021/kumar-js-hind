const score = 400
console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);   
// console.log(balance.toFixed(2));      // to.Fixed : how many decimal digit u want     // output => 100.00
// const otherNumber = 123.89666

// console.log(otherNumber.toPrecision(3));      //    to.Precision : how precise value u want to display  // output =>  124


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    //  to.LocalString : display numbers in comma, 'en-IN' use comma as Indian Standard.




// +++++++++++++++++++++++++++++++++++++   Maths  ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   // .abs => converts neg value into Positive Value.
// console.log(Math.round(4.6));  // .round => rounds off to nearest interger.
// console.log(Math.ceil(4.6));   // .ceil => takes top value // ex : (4.2) oe (4.9)  // Output => 5
// console.log(Math.floor(4.9));  // .floor => takes base value for output 
// console.log(Math.min(6,8,9,3));  // .min => dispaly min value
// console.log(Math.max(6,8,9,3));  /// .max => display max value


console.log(Math.random()) ;  // Always took decimal value from 0 - 10 
console.log((Math.random()*10) + 1);  //  display output greater then or equal to 1
console.log(Math.floor(Math.random()*10) + 1); 


const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )  