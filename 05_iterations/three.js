//for of loop

// ["", "", ""]

//[{},{},{}]


// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const heros = ["flash","batman","superman","wonder woman","aquaman"]
// for(const hero of heros){
//     console.log(hero);
// }

// const UserName = "hitesh"

// for(const char of UserName){
//     console.log(`Each char is ${char}`);
// }


//map

//do not repeat the values
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France"); 
//console.log(map);
//this is used only for map not for object
for(const [key,value] of map){
    console.log(key ,'->',value);
}


