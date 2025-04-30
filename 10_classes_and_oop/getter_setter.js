class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        //return this._password.toUpperCase();
        return`${this._password}hitesh`;
    }

     get email(){
        return this._email.toUpperCase();
     }  

    set password(value){
        this._password = value;
    }
    set email(value){
        this._email = value;
    }
}

const hitesh = new User ("h@hitesh.ai", "abc");
console.log(hitesh.email);
console.log(hitesh.password);


