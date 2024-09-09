const marvel = ["thor","iron","super","spider"]
const dc = ["flash","batman","deadpool"]


// marvel.push(dc)  //Here 1st array take the whole 2nd array as a single element
// console.log(marvel);

// console.log(marvel[4][1]);

// const Allhero = marvel.concat(dc)
// console.log(Allhero);  //merge two arrays easily

// const allNew = [...marvel,...dc] //same work as concat  mpst preffered
// console.log(allNew); 


const another_Array = [1,2,3,[4,5,6,],7,[6,7,[4,5,]]]
//give single array for array of multiple arrays in it
const real_array = another_Array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); //intersting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




