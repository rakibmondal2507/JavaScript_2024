const num = 7
// console.log(num)

const score = new Number(100);
// console.log(score);

// console.log(score.toString().length);
// console.log(typeof score);
// console.log(score.toFixed());

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// <------------- maths -------------->
    // console.log(Math);
    // console.log(Math.abs(-4));
    // console.log(Math.round(4.347));
    // console.log(Math.ceil(4.2));
    // console.log(Math.floor(4.9));
    // console.log(Math.min(4,5,3,7));
    // console.log(Math.min(4,5,3,7));
    // console.log(Math.max(4,3,6,2,6));


    console.log(Math.random());
    console.log(Math.floor(Math.random()*10)+1);

    const Max = 20;
    const Min = 10;

   let minMax = Math.floor(Math.random() * ((Max-Min)+1))+ Min;
   console.log(minMax);

