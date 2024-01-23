// for of loop 
const arr = [31,34,63,67,74];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Good Noon";
for (const greet of greeting) {
    // console.log(greet);
}

const map = new Map();
map.set('IN',"India")
map.set('FR',"France")
map.set('USA',"United States of America")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key,':',value);
}