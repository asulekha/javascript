const accountId=1234
let accountMail="sulekha.com"
var accountPass="meme"
accountCity="jaipur"
//accountId=1245 // not allowed
accountMail="sulekhaa@gamil"
accountPass='123'
accountCity="jharkhand" // this is possible but don't use this 
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
let city;// semicolon lagao ya nhi koi fark nhi padta h 
console.log(city) // output undefined
console.table([accountId,accountMail,accountPass,accountCity])