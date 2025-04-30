// Primitive
//7 types : String, Number, Boolean , null, undefined, Symbol ,BigInt,

const score  = 100;
const scroreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;//undefined
const id= Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);
const bigNumber=2133213212313132132n

console.log(bigNumber);

//refernce Type or (Non Primitive)

//Array , Objects , functions

const heros = ["MAlijinah","Imrankhan","AllamaIqbal"];
let myObj ={
    name:"shahbaz",
    age:23,
}
const myFunction=function(){
console.log("Hello World");
}
console.log(typeof(anotherId));
console.log(typeof(bigNumber));
console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFunction));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let Myyoutuvename = "Shahbazkhanmynews";
let anothername = Myyoutuvename;
anothername ="myNew youtube";
console.log(Myyoutuvename);
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne;

userTwo.email = "shahbaz@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);



