// const tinderUser = new Object();  --> singleton object

const tinderUser = {}
tinderUser.id= "123abc"
tinderUser.name = "Aman"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Rakib",
            lastname:"Mondal"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1,...obj2,...obj4};

// console.log (obj3);

const user = [
    {
        id: 1,
        email: "rm@gmail.com"
    },
    {
        id: 1,
        email: "rm@gmail.com"
    },
    {
        id: 1,
        email: "rm@gmail.com"
    },
    
]

user[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


// Object de-structure ----->

const course ={
    coursename: "JS in hindi",
    price: "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course ;
// console.log(courseInstructor);

const {courseInstructor : instructor} = course ;
console.log(instructor);
