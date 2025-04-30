// var c =300;
let a =300;
if(true){
let a = 10
//const b = 20
// var c = 30;
console.log("Inner:",a);
}

console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const userName = "shahbaz";

    function two(){
        const websit = "youtuve";
        console.log(userName)
    }

    //console.log(websit)//not Assessible

    two();
}
one();

if (true) {
    const username = "shahbaz";
    if (username==="shahbaz") {
        const webist = "youtube"
        console.log(username + webist);
    }
   // console.log(websit)
}

//++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++
console.log(addone(5))//this is easy calling the function because this is function 
function addone(num){
    return num+1
}

addTwo(5)//this function is not call becuase this is variable container variable 
const addTwo = function(num){
    return num+2
}


