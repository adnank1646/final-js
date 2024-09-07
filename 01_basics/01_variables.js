const accountId = 14556598
let accountEmail = "adnan@google.com"
var accountPassword = "1345"
accountCity = "noida"


// accountId = 2 // not allowed for const

accountEmail = "hv@fr.com"
accountPassword = "56859"
accountCity = "suratt"
let accountState;


console.log(accountId);

/*
Preffered not to use var: bcoz of issue in block scope and functional scope 
const can not be changed after it assigned once
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
