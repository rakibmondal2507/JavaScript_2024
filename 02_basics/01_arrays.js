// const arr = [0,2,5,3,true,"Rakib"];
// console.log(arr[1]);

// const myHero = ["Ironman ", "spiderman"];
const myArr = new Array(1,2,3,5,7);
// console.log(myArr);

// array method
// myArr.push(10);
// myArr.push(15);
// myArr.pop();

// myArr.unshift(19);
// myArr.shift();

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));

const newArr = myArr.join();

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice , splice 

console.log("A", myArr);
const myn1 =  myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 =  myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2)