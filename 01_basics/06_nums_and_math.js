const score = 400;
const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 123.80482038402;
console.log(otherNumber.toPrecision(3))
const hundards= 100000;
console.log(hundards.toLocaleString('en-PK'))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=Math+++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,2,6,1));
console.log(Math.max(4,3,2,6,1));

console.log(Math.random());//value from 0 to 1
console.log(Math.floor((Math.random()*10))+1);
const min =10;
const max =20;
console.log((Math.floor(Math.random()*(max-min+1)))+min)