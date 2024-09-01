// for(loop)


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

// console.log(element); // not acessible


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    //    console.log(`Outer loop value  ${j} and inner loop ${i}`);
    
    // console.log(i + '*' + j + ' = ' + i*j);
    
       
        
    }
    
}

let myArray = ["Flash" , " batman", "superman " ] 
//  console.log(myArray.length);
 
for (let index = 0; index < myArray.length; index++) {     // index++ => very important for loop
    const element = myArray[index];
    // console.log(element);
    
    
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
      
//         break
//     }                                   // break operator => if detected the condition then stop the loop
    
    
//     console.log(`value of i is ${index}`);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
      
//         continue
//     }
    
    
//     console.log(`value of i is ${index}`);
    
// }                                                      // continue => if detected then skip 1 succseeding value


