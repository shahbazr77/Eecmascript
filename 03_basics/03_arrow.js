const user ={
    username: "John",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "John";
//     console.log(this);
//     //console.log(this.username);//this key word for only object
// }

// chai();


// const chai = () => {
//     let username = "John";
//     console.log(this.username);
// }

// chai();
//this is arrow function explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));

// //this is implicit return no need to use return and curly bracses
// const addThre = (num1,num2) => (num1 + num2);
// console.log(addThre(3, 9));

const addfour = (num1,num2) => ({username: "John"});
console.log(addfour(3, 4));

const myArr = [2,5,3,9,4]






