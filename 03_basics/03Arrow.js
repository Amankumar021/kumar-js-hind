const user = {
    username: "Aman",
    price : 999,


    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // .this => refer to current context (that is within this '{}'
    }
}

user.welcomeMessage()
