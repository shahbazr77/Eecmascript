const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["supertman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
// const allHeros =marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc_heros]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("shahbaz"));
console.log(Array.from("Shahbaz"));
console.log(Array.from({name:"shahbaz"}));//interesting 
let score1=100;
let score2=200;
let scror3= 300;
console.log(score1,score2,scror3);