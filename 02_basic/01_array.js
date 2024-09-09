//ARRAYS


//Declarations of Arrays
const myArr = [0,1,2,3,4,5]
const myHero = ["ab","nj","kl"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

//ARRAY METHODS

// myArr.push(6)  //Add element at last index
// myArr.pop()    //Remove element from last index


//myArr.unshift(0)   //unsafe method bcos shift the whole array
// myArr.shift()     // Delete first element of array
// console.log(myArr);
// console.log(myArr.includes(9)); // BOOLEAN TYPE COME to check for an element

// console.log(myArr.indexOf(5));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)  // SPLICE also manipulate the array and also give range included last range
console.log("C",myArr);
console.log(myn2);








