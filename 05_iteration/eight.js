const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval 
// },0)

const myTotal = myNums.reduce((acc,curval) => acc+curval,0)



console.log(myTotal);

const shopCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "dev course",
        price: 5999
    },
    {
        itemName: "app-dev course",
        price: 8999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const price = shopCart.reduce((acc,item) => acc+item.price, 0)
console.log(price);
