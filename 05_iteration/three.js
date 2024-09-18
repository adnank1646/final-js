// FOR OF

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
   // console.log(num);
}

const greet = "Hello World!"
for(const gt of greet){
    //console.log(`each char of is ${gt}`);
}

//Maps ('key' "value" pair only take individual pair)

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"INDIA")

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}


const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }


