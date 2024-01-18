const Marvel_heros = ["Ironman", "Thor" , "Spiderman"];
const DC_heros = ["Batman", "Superman" , "Flash"];

// Marvel_heros.push(DC_heros);

// console.log(Marvel_heros);

// const hero = Marvel_heros.concat(DC_heros);
// console.log(hero);

// spread method
const allNewHero = [...Marvel_heros,...DC_heros];
// console.log(allNewHero);

const anotherArray = [1,2,3, [4,5,6,[7,8,9],10,11,],12,13];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("Rakib"));
console.log(Array.from("Rakib"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));