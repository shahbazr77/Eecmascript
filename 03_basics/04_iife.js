//immediately invoked function Expression (IIFE)
//call automatically

//named IIFE
(function chai(){
    console.log("DB CONNECTED");
})();

//anonymous IIFE
( () => {
    console.log("DB CONNECTED TWO");
})();
//parameter IIFE
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )("shahbaz")