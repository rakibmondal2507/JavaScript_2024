// singleton 
// Object.create 

// object literals 

const mySym = Symbol();

const JsUser = {
    name: "Rakib",
    [mySym]: "MyKeys",
    "Full Name" : "Rakib Mondal",
    age: 20,
    location: "Kolkata",
    email: "rakib@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rakib@chatgpt.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);
JsUser.email = "rakib@microsft.com";
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function (){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
