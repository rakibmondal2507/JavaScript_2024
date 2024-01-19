// this keyword
const user = {
    username: "Rakib",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Roy",
// user.welcomeMessage();
// console.log(this);



// function chai(){
//     let username = "rakib"
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username = "rakib"
//         console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "rakib"
//         console.log(this);
// }

// chai()

// arrow function 
// explicit return 
// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(3,4));

// implicit return 
// const addTwo = (num1 , num2) => num1+num2 ;
const addTwo = (num1 , num2) => (num1+num2) ;
// console.log(addTwo(3,4));

const objectReturn = () => ({username: "Rakib"});
console.log(objectReturn());

