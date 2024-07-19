// Dates

let myDate = new Date()
// console.log(myDate);                    // output => yyyy-mm-dd  04:03:03(time) 
// console.log(myDate.toString());           // display date => DD-MM-yyyy 04:31:02(time)
// console.log(myDate.toLocaleString());      // output => m/dd/yyy, 9:10:13
// console.log(myDate.toLocaleDateString());    // output => mm/dd/yyyy
// console.log(myDate.toISOString());      // output => yyyy-mm-ddT 06:02:224Z
// console.log(myDate.toJSON());           // yyyy-mm-ddT hr:min:sec
// console.log(myDate.toTimeString());     // hr:min:sec
// console.log(myDate.toUTCString());    // day, dd month yyyy hr:min:
// console.log(myDate.toDateString);        // day month yy yyyy

// console.log(typeof myDate);  // object 

// let myCreatedDate = new Date(2023,0,23,)
// let myCreatedDate = new Date(2023,0,23, 5, 3)
// let myCreatedDate = new Date ( "2023-01-14")
let myCreatedDate = new Date ( "01-14-2024")
// console.log(myCreatedDate.toDateString());   


let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


// `${newDate.getDay() } and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

