//prototype is a property of function constructor
// let myName = "Shahbaz       ";

// console.log(myName.trueLength);

// let myHeros = ["thor", "spiderman"];

// let herePower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.shahbaz = function(){
//     console.log("shahbaz is in all object data type");
// }

// Array.prototype.heyShahbaz = function(){
//     console.log("shahbaz is in all array data type");
// }

//herePower.shahbaz();

// myHeros.shahbaz();
// myHeros.heyShahbaz();
//herePower.heyShahbaz(); does not work because herePower is not an array
//myHeros.shahbaz(); does not work because myHeros is not an object 
//but the object has power is accessable by the prototype
// const user = {
//     name: "shahbaz",
//     email: "shahbaz@google.com",
// }

// const Teacher  ={
//     makevideo: true,
// }

// const TeachingSupport ={
//     isAvailable: false,
// }

// const TASupport ={
//     makeAssignment: "JS assignment",
//     fullTime: true,
//     __proto__: TeachingSupport,
// }

// Teacher.__proto__ = user;

// //modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`The true length of the string is ${this.trim().length}`);

}

console.log(anotherUsername.trueLength());

"shahbaz     ".trueLength();
"iceTea   ".trueLength();



