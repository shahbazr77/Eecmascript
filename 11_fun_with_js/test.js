const myArr= [];
// %DebugPrint(myArr);

//continus Array
//Holey Array
//packed element Array
//Double (float,string,function
//Semispace Array

const hollArray = [1,2,3,4,'',6,7,8,9,10];   

//packed element Array
const arrTwo = [1,2,3,4,5,6,7,8,9,10];

//Packed Double Array
arrTwo.push(6.0);

//Packed _Elements
arrTwo.push('7');


//Holley Elements
arrTwo[10] = 11;

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);
//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnproperty(arrTwo.prototype,19)

//holes are very expensive in js

const arrThree = [1,2,3,4,5];
console.log(arrThree[2]);

//SMI>DOUBLE>Packed
//H_SMI>H_DOUBLE>H_PACKED

const arrFour = new Array(3);
//just 3 holes.Holey_SMI_Element
arrFout[0]= '1';//Holly_Element
arrFout[1]= '2';//Holly_Element
arrFout[2]= '3';//Holly_Element

const arrFive = [];
arrFive.push('1');
arrFive.push('2');
arrFive.push('3');

const arrSix = [1,2,3,4,5];

arrSix.push(infinity)//packed Double

//for,for-of,forEach






