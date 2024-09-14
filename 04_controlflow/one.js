// //if-statements
// const isUserLogIn = true
// const tempreture = 42



// if(tempreture < 50){
//     console.log("less than 50"); 
// }
// else{
//     console.log("temp is greater than 50"); 
// }

// if(false){
//     //not exectude for its scope
// }

//2<=2
//<, >, <=, ==, !=, ===(check for type also),


// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


//SHORTHAND NOTATION
const balance = 1000

//if(balance > 500) console.log("test"),console.log("test2"); // not good way


//NESTING
// if(balance > 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLogIn = true
const debitCard = true
const loggedInGoogle = false
const loggedInFB =true
if(userLogIn && debitCard && 2==3){
    console.log("Allow to buy courses"); 
}

if (loggedInGoogle || loggedInFB) {
    console.log("User Logged In");
}


