// FOR LOOP 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Inner Loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
        
//     }
// }


// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break and continue
for (let index = 1; index < 20; index++) {
    //const element = array[index];
    if(index==5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}


for (let index = 1; index < 20; index++) {
    //const element = array[index];
    if(index==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}