function SetUsername(username){
    //complex DB calls
    this.username = username;
}

function creatUser(username, email, password){
    SetUsername.call( this,username);
    this.email = email;
    this.password = password;
}

const chai = new creatUser("chai", "chai@gmail.com", "12345");
console.log(chai);



