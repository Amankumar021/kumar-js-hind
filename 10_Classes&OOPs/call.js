function SetUsername(username) {
    //complex DB calls

    this.username = username
    // console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","aman55@gmail.com", "54622");

console.log(chai);