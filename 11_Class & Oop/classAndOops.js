const users = {
    username: "Rakib",
    loginCount: 8,
    isLoggedIn: true,
    
    getUserDetails: function (){
//        console.log("Got users details from Database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
//console.log(user.username);̥
//console.log(user.getUserDetails());
//console.log(this);

function user(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome${this.usersname}`);
    }
    
    return this;
}
const userOne = new user("Rakib" , 12 , true);
const usertwo = new user("Ruhi" , 2 , true);
console.log(userOne);
console.log(usertwo);