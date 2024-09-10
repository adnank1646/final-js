//SINGLETON 
//object.create
//IF  constructer then singleton


//object literals
const mySym = Symbol("key1")


const JsUser = {
    name:"Adnan",  //key:value
    age:18,
    "full":"khan",
    location:"Noida",
    email:"Adnan@123",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//how to access objects
console.log(JsUser.email);
console.log(JsUser["email"]); // right way or preffered way
console.log(JsUser["full"]);
console.log(JsUser.mySym);



