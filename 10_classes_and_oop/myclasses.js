//ECMA6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`;
//     }
    
// }

// const chai = new User("shahbaz", "chai@gmail.com", "12345");
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

//behind the scene

function withoutClassUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
withoutClassUser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
withoutClassUser.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new withoutClassUser("tea", "tea@gmail.com", "12345");

console.log(tea.encryptPassword());
console.log(tea.changeusername());











