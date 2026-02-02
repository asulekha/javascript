//arry

const myArr=[5,1,2,3,4]
const myheros=["sulekha","papa","bhai"]
const myArr1=new Array(1,2,34,5);
console.log(myArr[0])// 5

//Methods
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)//9 added at 0 index of myArr
// myArr.shift()// remove first element of array


console.log(myArr.includes(9))//check wheather it is present or not
const newArr=myArr.join();//it will give myArr but in string format that its typeof change to string 
console.log(newArr)//5,1,2,3,4
console.log(myArr)//[5,1,2,3,4]

// slice, splice

console.log("A",myArr)
//A [ 5, 1, 2, 3, 4 ]
const myn1=myArr.slice(1,3)
//it does not include 3 and also array remains unchanged
console.log("B ",myArr)
console.log(myn1)
//B  [ 5, 1, 2, 3, 4 ]
//[ 1, 2 ]


const myn2=myArr.splice(1,3)
// splice include both 1 and 3 and remove element from original array
console.log("C ",myArr)
console.log(myn2)
// C  [ 5, 4 ]
//[ 1, 2, 3 ]