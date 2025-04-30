class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    getDetails(){
        console.log(`Teacher name is ${this.username} and email is ${this.email} and password is ${this.password}`);
    }
}


const chai = new Teacher("shahbaz", "shahbaz@gmail.com", "12345");
chai.logMe();
chai.getDetails();
const masalaChai = new user("masalaChai");
masalaChai.logMe();
console.log(chai instanceof Teacher);
console.log(chai instanceof user);














