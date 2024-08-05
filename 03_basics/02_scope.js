// var c = 300
// let a = 300

if (true) {
    let a = 10 
    const b = 20
    // var c = 30  noit to use var in function
    // c = 200 nor this to use in function
    // console.log("INNER:",a);
}
    



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="Aman"


    function two(){
        const website= " youtube"
        console.log(username);
        
    }
    // console.log(website);

    // two()
    
}

// one()

if (true) {
    const username ="Aman"
    if (username==="Aman") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++ inresting ++++++++++ // 


function addOne(num){
    return num + 1
}

// console.log(addOne(5));

addTwo(5)   // error cannot access before initialisation

const addTwo = function (num) {
    return num + 2
    
}           


