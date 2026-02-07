const coding=["js","rb","py","java","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item;
// })
// console.log(values)//give undefined

const myNums=[1,2,3,4,5,6,7,8,9,10];
// myNums.filter( (num)=> num > 4)
// myNums.filter((num)=>{
//     return num>4
// })
// both are same as we have studied earlier
//if we use implict function then will return automatically
// but for explict function we have to use return keyword


// const newNums=myNums.filter((num)=>{
//      num>4
// })
// console.log(newNums)//[]

const newNums=[]

myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums)//[ 5, 6, 7, 8, 9, 10 ]

