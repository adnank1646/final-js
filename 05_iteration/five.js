const code = ["js","ruby","java","python","cpp"]

// code.forEach(function (item) {
//     console.log(item);
// })

// code.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// code.forEach(printMe)

code.forEach( (item,index, arr) => {
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})