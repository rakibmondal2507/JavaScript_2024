// forEach loop
const coding =["ruby","python","JavaScript","cpp","Swift"]

// coding.forEach(function(code){
//     console.log(code);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(value){
//     console.log(value);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index , arr);
// } )

const arr = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
]

arr.forEach((item) => {
    console.log(item.languageFileName);
})