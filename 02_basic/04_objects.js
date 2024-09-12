// const tinderUser = new object()
const tinderUser = {}


tinderUser.id = "125abc"
tinderUser.name = "Samm"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullname:{
            firstName:"Adnan",
            lastName:"Khan"
        }
    }
}

// console.log(regularUser.fullName.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


//const obj3 = {obj1,obj2}  //  obj1: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }, obj2: { '3': 'a', '4': 'b' }
//Correct way to do 
//const obj4 = Object.assign(obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj5 = Object.assign({},obj1,obj2) //optional way but professinal
// console.log(obj3);
// console.log(obj4);

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email: "adn@gmail.com"
    },
    {
        id:1,
        email: "adn@gmail.com"
    },
    {
        id:1,
        email: "adn@gmail.com"
    },
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



