class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
//   static
   createId(){
        return `123`
    }
}

const rakib = new User("Rakib")
console.log(rakib.createId());

class Teacher extends User{
    constructor(username , email) {
        super(username)
        this.email = email;
        
    }
}

const iphone = new Teacher("iphone", "iphone@apple.com")
//console.log(iphone);

//iphone.logMe();

console.log(iphone.createId());