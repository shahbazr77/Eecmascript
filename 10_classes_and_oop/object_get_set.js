const User = {
     _email: 'h@hitesh.ai',
     _password: "abc",

   get email(){
    return this._email.toUpperCase();
   },
   set email(value){
    this._email = value;
   }
        
}

const tea = Object.create(User);
console.log(tea.email);

tea.email = "h@hc.ai";
console.log(tea.email);
