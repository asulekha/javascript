//Immediately Invoked function Expression(IIFE)
/*
what is iife?
global scope se pollution se problem hoti h kai bar
to uss global scope ke jo v variable ya jo declearation
h usske pollution ko hatane ke liye hum iife use karte h
*/
(function one(){
    // named iife
    console.log(`DB coonected`)
})();// this semicolon end iife
//()() first for function defination and second one for function execution 
(()=>{
     console.log(`DB coonected two`)
})();
((name)=>{
    //unnamed iife
     console.log(`DB coonected two`)
})('suman');