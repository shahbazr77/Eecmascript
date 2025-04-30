//objecct literals

const user = {
    userName: "Shahbaz",
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.userName} and login count: ${this.loginCount}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user["userName"]);
// console.log(user.getUserDetails());
// console.log(this);

//constructor function

function User(userName, loginCount, isLoggedIn){
    this.myuserName = userName;
    this.myloginCount = loginCount;
    this.myisLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.myuserName}`);
    }
    return this;
}

//new is create new empty object
//with new keyword the constructor function is called
//and the this keyword is pointing to the new empty object
//and the new empty object is returned

//const userOne  = new User("Shahbaz", 12, true);
const userTwo  = new User("Waqas", 10, true);
console.log(userOne);
console.log(userTwo.constructor);
