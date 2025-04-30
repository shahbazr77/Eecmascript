//array
const myArr= [0,1,2,3,4,5,11,7];
const myHerors = ["Allama Iqbal","Qaid-e-Azam"];
const myArr2 = new Array(1,2,3,4,5,6);
console.log(myArr[1]);
myArr.push(8);
myArr.pop();//remove the last element from the array
console.log(myArr);
console.log(myArr.unshift(9))//add the 9 element in the array in the started from the array
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(11));
const newArr = myArr .join();
console.log(myArr);
console.log(newArr);
//slice,splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2)

