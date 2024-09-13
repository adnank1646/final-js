// var c = 300
// let a = 300

// //{}   //this is scope 
// if(true){
//   let a = 10
//   const b = 20 
  //console.log("INNER: ",a);
  
//}

// console.log(a); //it come as not defined
// console.log(b); // it comes as not defined
//console.log(c); // but it gives 30 which is a problem
//console.log(a);


// function one(){
//     const username = "Adnan"

//     function two(){
//         const webSite = "youtube"
//         console.log(username);
//     }
   // console.log(webSite);
   /// two()
//}
//one()


if(true){
    const username = "adnan"
    if(username === "adnan"){
        const webSite = " youtube"
        //console.log(username + webSite);
    }
    //console.log(webSite); //error bcos of scopes
}
//console.log(username);



//++++++++++intersting ++++++++++++++
addone(5)  // here u can access before initialisation
function addone(num){
    return num + 1
}

addone(5)


addtwo(5) // here u can't access before init and bcos of method of declaration
const addtwo = function(num){
    return num + 2 
}

addtwo(5)