// const coding = ["js","ruby","java","python","cpp"]

// //forEach is not return the value in this case
// const values = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// })

// console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((itme) => itme > 5 );
// const hellNums = myNums.filter((itme) => {
//     return itme>4;
// });
// console.log(newNums);
// console.log(hellNums);

// const newNums = [];
// myNums.forEach((item)=>{
//     if(item>5){
//         newNums.push(item);
//     }
// })
// console.log(newNums);

const books = [
    {title:"book1",genre:"history",publish:1981,edition:2004},
    {title:"book2",genre:"non-history",publish:1992,edition:2008},
    {title:"book3",genre:"history",publish:1999,edition:2007},
    {title:"book4",genre:"non-history",publish:2000,edition:2009},
    {title:"book5",genre:"history",publish:2001,edition:2003},
    {title:"book6",genre:"history",publish:2002,edition:2004},
    {title:"book7",genre:"history",publish:2003,edition:2005},
    {title:"book8",genre:"history",publish:2004,edition:2006},
    {title:"book9",genre:"history",publish:2005,edition:2007},
    {title:"book10",genre:"history",publish:2006,edition:2008},
    

]

const userBooks = books.filter((book)=>book.publish>=2000);

let userBooks2 = books.filter((book)=>{
    return book.publish<=1995 && book.genre==="history"
})

//console.log(userBooks);
console.log(userBooks2);


