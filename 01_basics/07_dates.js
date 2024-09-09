//DATES (BASICS)

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // it is an object

// let myCreatedDate = new Date(2023, 0, 23) //MONTHS Start from 0(jan)
// console.log(myCreatedDate.toDateString());
// let DateTime = new Date(2023, 5, 9, 8, 23)
// console.log(DateTime.toLocaleString());
let Datee = new Date("2023-01-14")  // Here Month start from 1 (JAN)
// //In India we use MM/DD/YYYY instead of this
// console.log(Datee.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Datee.getTime()); //to get millisecond from 1/1/1970 to date
// console.log(Math.floor(Date.now()/1000));

//Date.now gives milli-sec from 1/1/1970 to now
// Thats why we uses upper nmethod to get valus less as it is easy to compared


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());


//`${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))







