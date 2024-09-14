const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else{
    console.log("Don't have User email");
}


//FALSY VALUE
//false, 0, -0, BigInt 0n, null, undefined, NaN

//TRUTHY VALUE
//"0", 'false', " ", [], {}, function(){}


// if (userEmail.length===0) {
//     console.log("Array is Empty");
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("Object is Empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 20   //10

console.log(val1);


// condition ? true : false

const icePrice = 100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;
