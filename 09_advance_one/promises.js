// const promiseOne = new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is compelete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 compelete");
//         resolve();
//     })
// }).then(function(){
//     console.log("Async 2 compelete");
// })

// const PromiseThree = new Promise(function (resole,reject){
//     setTimeout(function(){
// resole({username:"hitesh",email:"hitesh@google.com"})
//     },1000)
// })

// PromiseThree.then(function(users){
//     console.log(users.username);
// })

// const promiseFour = new Promise(function(resole,reject){
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resole({username:"hitesh",password:"12345"})
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// });

// const username =promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;

// })
// .then((username)=>{
//     console.log(username);
// }).catch(function(error){   
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected")
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"javascript",password:"12345"})
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// });

// async function consumePromiseFive (){
//    try{
//     const response = await promiseFive;
//     console.log(response);
//    }catch(error){
//     console.log(error);
//    }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response);
//          const data = await response.json();
//          console.log(data);
//     }catch(error){
//         console.log(error);
//     }

// }

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((error) => console.log(error))