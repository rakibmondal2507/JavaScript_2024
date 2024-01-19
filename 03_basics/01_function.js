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
console.log(userLogin());