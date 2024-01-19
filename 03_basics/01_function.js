function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("k");
    console.log("i");
    console.log("b");
}

// sayMyName();

function add (number1 , number2){
    return number1 + number2;
}

let result =  add(5,6);
// console.log(result);

function userLogin (username){
    if(username === undefined){
        console.log(`Please enter your username.`);
        return;
    }

    return `${username} just logged in.`;
}
// console.log(userLogin("Rakib"));
// console.log(userLogin());

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,600,3000));

// object function 
user = {
    name: "Rakib",
    price: 199
}
function handleObject (anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    name:"Riyaan",
    price: 299
});

const myNewArray = [100,200,400];

function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));
