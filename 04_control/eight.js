const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} curval: ${curval}`)
//     /*acc: 0 curval: 1
//       acc: 1 curval: 2
//       acc: 3 curval: 3 */
//     return acc+curval;
// },0)
const myTotal=myNums.reduce((acc,curval) =>acc+curval,0)
/*      acc: 0 curval: 1
        acc: 1 curval: 2
        acc: 3 curval: 3 */
console.log(myTotal)
const shoppingCart=[
    {
        itemNmae:"js course",
        price:2999

    },
     {
        itemNmae:"c++ course",
        price:999

    },
     {
        itemNmae:"java course",
        price:5999

    },
     {
        itemNmae:"mobile dev course",
        price:7999

    }
]
const pricetopay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay)
