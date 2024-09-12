
function sayMyName(){
console.log("A");
console.log("D");
console.log("N");
console.log("A");
console.log("N");
console.log("K");
}
//sayMyName()

// function addTwoNumbers(number1, number2){ //here is parameters
//    console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){ //here is parameters
    // let result = number1+number2
    // return result
    return number1+number2
 }

// addTwoNumbers(3,5)  ///at call time called as an arguments
// addTwoNumbers(3,"5") //35
// console.log(3,"a");  //3a


const res = addTwoNumbers(5,9)
// console.log("result: ",res);



function loginUserMessage(username){
    if(username === undefined){
        console.log("please, Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Adnan"))
// console.log(loginUserMessage("")) // empty
// console.log(loginUserMessage())  // undefined

function loginUserMessage2(username = "adn"){ //here if we even not define any value then atleast adn will take plsce as a para
    return `${username} just logged in`
}

// console.log(loginUserMessage2("adads"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Hitesh",
    prices :156
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "sam",
    price:951
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,562,4598,23548]));
