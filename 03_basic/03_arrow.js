const user = {
    username: "Adnan",
    price:999,

    welcomeMessage: function(){
        ///console.log(`${this.username}, welcome to website`);
       // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "fghjk"
//     console.log(this); // same as below many codes are coming
// }

// chai()


// const chai = function(){
//     let username = "fghjk"
//     console.log(this);  // this time it gives many value
// }


// const chai = () => {
//     let username = "fghjk"
//     console.log(this);  // {}
// }
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(5,9));


const myArray = [2,5,3,7,8]

// myArray.forEach(function() {})
myArray.forEach(() => {})
