const userEmail="s@sulekha.ai"
if(userEmail){
    console.log("Got user email")// this will execute
}else{
    console.log("Don't have user email")
}
// falsy value
/*
false ,0,-0,BigInt 0n,"",null,undefined,NaN
*/

// truthy values
//"0",'false'," ",[],{},function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Array is empty");
}

// false==0// give true
// false=='';// give true
//0=='';// give true

// nullish coalesing operator(??):null undefined

let val1;
// val1=5??10// first value assign hoti h
// console.log(val);//5
// val1=null??10
// console.log(val);//10
val1=undefined??15
console.log(val);

// Terniary operator
// condition?true:false;
const iceTeaprice=100
iceTeaprice<=80?console.log("less than 80"):console.log("more than 80");
