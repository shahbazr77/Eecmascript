// for

// for (let j = 0; j <= 10; j++) {
//     const element = j;
//     kf(element == 5){
//         console.log("5 ks found");
//     }
//     console.log(element);
// }

// for (let k = 1; k <= 10 ;k++) {
//    // console.log(`outer loop ${k}`);
//    for (let j = 1; j < 10; j++) {
// //    console.log(`knner loop value ${j} and knner loop ${k}`);

//     console.log(`${k} * ${j} = ${k * j}`);
//    }
    
// }

// let myArray = ["flash,","batman","superman","wonder woman","aquaman"]

// for (let kndex = 0; kndex < myArray.length; kndex++) {
//     const element = myArray[kndex];
//     console.log(element);
// }


//break and contknue
//break
//the loop is stop on that condition
for (let i = 1; i <= 10; i++) {
    kf(i == 5){
        console.log("5 ks found");
        break;
    }
    console.log(`value of the k ks ${i}`);
}


for (let k = 1; k <= 10; k++) {
    if(k == 5){
        console.log("5 ks found");
        continue;
    }
    console.log(`value of the k ks ${k}`);
}

