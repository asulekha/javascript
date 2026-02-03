// let a=10;
// a=50// we can do this 
// const b=20
//const b=60// give error
// // b=60// give error, we cant ressign the value of b
// var c= 5;
// var c = 20; // ✅ allowed
// console.log(c); // 20

// if(true){
//     let a=10;
//     const b=540
//     var c=7000
//     console.log(c)//7000
//     console.log("INNER:",a)
// }
// console.log(a)//50
// console.log(b)//20
// console.log(c)//7000


function one(){
    const username="suman"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)// this will give error because we access website outside the two
    two()
}

// one()
if(true){
    const username="suman"
    if(username==="suman"){
        const website ="youtube"
        console.log(username+website)
    }
    // console.log(website)//give error because the website is out of scope 
}
//console.log(username)//again give error because the website is out of scope 


//*********************************
console.log(addone(5))// it will not give error
function addone(num){
    return num+1;
}
addone(5)
console.log(addTwo(5))// it will give error
const addTwo =function(num){
    return num+2
}
addTwo(5)
