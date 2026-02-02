const name="sulekha"
const repoCount=4
console.log(name+repoCount+" value");//not recommended
console.log(`Hello my name is ${name} and my repo count 
    is  ${repoCount}`)
const gameName=new String('sulekha')


console.log(gameName[0])//output s
console.log(gameName.__proto__)// output {}


console.log(gameName.length)//7
console.log(gameName.toUpperCase()) //SULEKHA
console.log(gameName.charAt(2))//L
console.log(gameName.indexOf('l'))//2

const newString =gameName.substring(0,4)
console.log(newString)//sule

const anotherString=gameName.slice(-7,4)
console.log(anotherString )

const newString1="   sulekha    "
console.log(newString1)// output->   sulekha    
console.log(newString1.trim())// output ->sulekha trim all the spaces

const url="https://sulekha.com/sulekha%20yadav"
console.log(url.replace('%20','-'))
//output->https://sulekha.com/sulekha-yadav

console.log(url.includes('sulekha'))

console.log(url.split('/'))
