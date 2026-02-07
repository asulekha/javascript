const myNumbers=[1,2,3,4,5,6,7,8,9]
// const newNums=myNumbers.atmap(()=>num+10);
console.log(newNums)//return number +10

//chaining

const newNums=myNumbers
              .map((num)=>num*10)// this multiply ex-num=1 then it become 10
              .map(()=>num+1)// this do +1 it become 11
              .filter((num) => num>=40)