const accountId = 14435
let accountEmail = "aman@gog.com"
var accountPassword = "1234512"
accountCity = "Allahabad"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ha@ha.com"
accountPassword = 21356
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

