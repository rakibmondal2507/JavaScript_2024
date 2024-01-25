const myNums = [1,2,3];

// const total = myNums.reduce(function(acc , currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// },2)

const total = myNums.reduce((acc, curr) => acc + curr , 0)

// console.log(total);

const shoppingCart = [
    {name: "JS course",
     price: 999
    },
    {name: "Python course",
     price: 499
    },
    {name: "Data Structure course",
     price: 1499
    },
    {name: "Data Science Course",
     price: 14999
    },
    {name: "App Dev Course",
     price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceToPay);