// reduce functionality

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, currval) =>   acc + currval,0 )                                        // arrow functuionality

// console.log(myTotal);


const shoppingCart = [ 
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 999
    },
    {
        itemName : "html Course",
        price : 299
    },
    {
        itemName : "data science Course",
        price : 9999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => acc + item.price  ,0 )

console.log(totalPrice);
