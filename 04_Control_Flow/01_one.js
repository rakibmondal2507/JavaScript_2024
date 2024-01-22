// const score = 200;
// if(score>100){
//     const power = "fly";
//     console.log(`User can ${power}`);
// }
// console.log(`User can ${power}`);

// short hand notation 

//const balance = 1000;
//if (balance > 500) console.log("test"); // implicit scope 

// else if

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("User logged in");
}