const name = "hitesh";
const mynewer = "shahbaz-ahmad-rana"
const repoCount = 50
//console.log(name + repoCount + "value");
//string manupulations
console.log(`Hell my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('123456789');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
const newstring = gameName.substring(0,4);
console.log(newstring);
const anoutherString = gameName.slice(-8,5);
console.log(anoutherString);
const newStringone = "   shahbaz  ";
console.log(newStringone)
console.log(newStringone.trim());
const url ="https:hitesh.com/hitesh%20chouddary";
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(mynewer.split('-'))