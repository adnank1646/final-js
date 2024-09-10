//SINGLETON 
//object.create
//IF  constructer then singleton


//object literals
const mySym = Symbol("key1")


const JsUser = {
    name:"Adnan",  //key:value
    age:18,
    [mySym]:"mykey1", //to use it as a symbol insert mySym in [] 
    "full":"khan",
    location:"Noida",
    email:"Adnan@123",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//how to access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]); // right way or preffered way
// console.log(JsUser["full"]);
// console.log(JsUser[mySym]);

//way to define
//1. const name = Symbol("key")
//2. [name]:"value"
//3. to access it use object[name]

JsUser.email = "adnan@ret.com"
Object.freeze(JsUser)
JsUser.email = "addghj@321"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);



