const User=new Object()// this is singlton object
const tinderUser={}//nonsinglton
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false;


// console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }


const regularUser={
    eamil:"somwdewo.com",
    fullname:{
        userfullname:{
            firstname:"sulekha",
            lastname:"kumari"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={2:"a",4:"b"}
const obj6={5:"a",6:"b"}
// const obj3={obj1,obj2}
// console.log(obj3);//{obj1: {1:"a",2:"b"},obj2: {2:"a",4:"b"}}
const obj5=Object.assign({},obj1,obj2,obj6)// optional parameter h {} isko use karo ya nhi 
//output ->{1:"a",2:"b",2:"a",4:"b",5:"a",6:"b"}


// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }