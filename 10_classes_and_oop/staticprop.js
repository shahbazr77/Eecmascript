class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    //every method in static is not available to the instance
    static createId(){
        return `123`;
    }
}

// const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
    
}

const Iphone  = new Teacher("Iphone", "i@phone.com");
Iphone.logMe();
console.log(Iphone.createId());
