const userEmail = "h@h.com";

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}


// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let veal1;
veal1 = 5 ?? 10;
veal1 = null ?? 10;
veal1 = undefined ?? 10;
veal1 = null ?? 10 ?? 20;
console.log(veal1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");












