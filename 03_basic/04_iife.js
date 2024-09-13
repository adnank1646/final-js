//Imediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);   
// }
// chai()

// To immedialtely invoked
(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);   
})();

//()()
//(here u define the function)(here the execution of function)
//why use IIFE to avoid pollution of global variable and scope


( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Adnan')