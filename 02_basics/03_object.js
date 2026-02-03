// singleton
//object.create


// object literals

const mySym=Symbol("key")

const JsUser={
    name:"hitesh",
    "full name":"sulekah yadav",
    // mySym:"mykey",//its typeof is string
    [mySym]:"mykey",
    age:18,
    location:"varanasi",
    email:"sulelkha.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser."full name")// this is wrong
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])// for this case always use []


// JsUser.email="susujdowjdw.com"
// Object.freeze(JsUser)
// JsUser.email="idpdwfkfpa.com"
// console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());