function syayMyName(){
    console.log("H");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
}

//syayMyName();
//These are Paramenters
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,5);//These are Arguments

// const result = addTwoNumbers(5,8);
// console.log("result ", result);

// function addTwoNumbers(number1,number2){
// return (number1+number2);
// }



// const result = addTwoNumbers(5,8);
// console.log("result ", result);

// function loginUserMessage(username="sain"){
//     if(!username){
//         console.log("Please Enter the user Name");
//         return;
//     }
//     return `${username} jus Logged in`
// }

// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...numb1){
return numb1;
}
//console.log(calculateCartPrice(200,400,600,900));

const user = {
    username : "shahbaz",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
//handleObject({username:"waqas",price:30})

const myNewArray = [200,300,400,700]

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,600,800]));