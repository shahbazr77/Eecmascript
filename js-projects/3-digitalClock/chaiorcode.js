const clock =document.getElementById("clock");

let data = new Date();
console.log(data.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();

}, 1000);