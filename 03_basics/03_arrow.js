const user={
    username:"suman",
    price:99,
    welcomMessage:function(){
        // console.log(`Username is ${this.username} `)
        // console.log(this)// it refers to whole object user
    }
}
user.welcomMessage();//Username is suman
user.username="sam"
user.welcomMessage();//Username is sam// we  are saying to the username of current context
// console.log(this)// output->{}// wee are in node environment where this refer t empty


// function me(){
//     let username="suman"
//     console.log(this.username)// this will give undefined// this keyword work only for object not for function
    
// }
// me()
// const me=function(){
//     let username="suman"
//     console.log(this.username)// this will give undefined// this keyword work only for object not for function
    
// }
// me()
// arrow function
const me=()=>{
    let username="suman"
    console.log(this.username)// this will give undefined// this keyword work only for object not for function
    
}
// me()


// const addTwo=(num1,num2)=>{
//     return num1+num2;// i am using return keyword then it called explicit return 
// }
// console.log(addTwo(3,4))
//const addTwo=(num1,num2)=> (num1+num2);//this is called implicit return
const addTwo=(num1,num2)=> ({username:"suman"})
console.log(addTwo(3,4))// 7
