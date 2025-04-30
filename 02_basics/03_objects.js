//singleton


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "shahbaz",
    "full name" : "Shahbaz Ahamd",
    age:18,
    [mySym]: "mykey1",
    location:"Lahore",
    email: "test@gmail.com",
    isLoggedIn: false,
    lstLoginDays: ["Monday","Staturday"]
}

console.log(JsUser.name);//This method is not a valid method
//console.log(JsUser.full name)//this is not accesible by this method
console.log(JsUser["name"]);//this method is valid method
console.log(JsUser["full name"])
console.log(typeof(JsUser[mySym]));
//Object.freeze(JsUser);//no body can't change the value of the object
JsUser.email = "newemail.gmail.com";
console.log(JsUser);
JsUser.greeting = function (){
    console.log("Hello Js user");
}
console.log(JsUser.greeting())
JsUser.greetingTwo = function (){
    console.log(`Hell ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());