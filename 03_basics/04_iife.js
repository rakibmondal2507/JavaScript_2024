// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNCETED`);
})();

// chai()

(function code(){
    console.log(`DB CONNCETED TWO`);
})();

( (name) =>{
    console.log(`DB CONNCETED TWO ${name}`);
})("Rakib");