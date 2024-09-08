const name = "Adnan"
const repoCount =50

// console.log(name + repoCount + "value");


// console.log(`hello my name is ${name} and i have ${repoCount} `);

const gameName = new String('AdnanK-jk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('good'));

console.log(gameName.split('-'));





