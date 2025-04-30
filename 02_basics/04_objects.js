//singleton objects

//const tinderUser = new Object(); //this is singleton object

const tinderUser = {} // this not not singleton objet

tinderUser.id = "1321abc";
tinderUser.name = "shahbaz";
tinderUser.isLoggedIn  = false;
//console.log(tinderUser);

const reularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "shahbaz",
            lastname: "Ahamd",
        }
    }
}

//console.log(reularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {3:"a",4:"b"}
//const obj3= {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj5);
// console.log(obj3);

// const obj3 = {...obj1,...obj2,...obj5}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object distructure
const course = {
    courseName: "js in Hindi",
    courseinstructor : "Shahbaz Ahamd",
    cousrsePrice : 999
}
const {courseinstructor} = course
const {courseinstructor:insructor} = course
console.log(courseinstructor)//both are same to fetech the value
console.log(insructor)//both are same to fetche the value


