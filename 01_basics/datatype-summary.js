//Primitive 

//7 types : String, Number, Boolean, null, undefined, Symbol,
// BigInt 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bignum = 12568945265245285n // now auto it become bigint bcos of n in the ends

//REFERNCE TYPE(NON-PRIMITIVE)

//Array, objects, Functions

const heros = ["shaktiman","naagraj", "doga"]
let myObj={
    name:"adnan",
    age:"22"
}

const Myfunction = function(){
    console.log("Hello World");
}

console.table([typeof score,
 typeof scoreValue, typeof isLoggedIn,
typeof outSideTemp,
typeof id,
typeof anotherId,
typeof bignum,
typeof heros,
typeof myObj,
typeof Myfunction]);
