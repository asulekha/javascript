/* #Primitive

 7 types:String ,Number,Boolean,null,undefined,
 symbol,BigInt
 */
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//false because sybol make it unique
const bigNumber=23344786578307489078n;// it is BigInt number 
console.log(bigNumber)
 /*
Statically typed = variable ka type compile time pe fix ho jata hai
Dynamically typed = variable ka type runtime pe decide hota hai
 */
// js is dynamically typed

/*Reference (Non Primitive)

Array, Objects,Functions
*/
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"sulekha",
    age:22,
}
const myFunction =function(){
    console.log("Hello world");
}
console.log(typeof myFunction);//function
console.log(typeof heros);// object




//******************************
// Stack(Primitive)->ak copy milta h
//  Heap(Non-Primitive)->reference milta h 

let myUtube="sulekha.com"
anothername="sulekhayadav.com"

console.log(anothername);
console.log(myUtube)
let userOne={
    email:"use@google.com",
    upi:"user@ybl"
}
let userTwo =userOne;
 
userTwo.email="sulekha@gmail.com"

console.log(userOne.email)//output sulekha@gmail.com
console.log(userTwo.email)//output sulekha@gmail.com