//function
function sayMyname(){
     console.log("sulekha")
}
// sayMyname()
// function addTwonumber(num1,num2){// num1 ,num2 is parameter
//     console.log(num1+num2);
// }
// const result=addTwonumber(3,4)//34 where 3 ,4 are arguments
// console.log("result:",result);// undefined
function addTwonumber(num1,num2){// num1 ,num2 is parameter
    // let result=num1+num2;
      console.log(num1+num2);// this will execute
    return num1+num2;
    console.log(num1+num2);// this line is not ging to execute
}
// const result=addTwonumber(3,4)//7 where 3 ,4 are arguments
// console.log("result:",result);// 

function loginuser(username="sam"){// if nothing is passed then it take sam if it pass some value it will ovrerwrite that value
    if(username===undefined){// alternate satatement( !username)
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
// loginuser("sulekha")//not give any output q ki console nhi likha humne
// console.log(loginuser("sulekha"));
// console.log(loginuser());//if value is not passed it will give undefined

// when we don't know how many argument is coming
function calculateCartPrice1(num1){//...num1 called rest operator// while when we are using to merge two then we called it spread operator
    return num1;
}
function calculateCartPrice(val1,val2, ...num1){//...num1 called rest operator// while when we are using to merge two then we called it spread operator
    return num1;
}
// console.log(calculateCartPrice1(200,400,500))// it will give first value i.e 200
// console.log(calculateCartPrice(200,400,600,700,500))// it will return num1 i.e [600,700,500] while val1=200 and vla2=400

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    // console.log(`Username id=s${anyobject.username} and price is ${anyobject.price}`)// if i use anyobject.prices then it will give undefined
}
// handleObject(user);
handleObject(// direct object is passed
    {
        username:"hitesh",
        price:199
    }
)
const myNewArray=[200,400,500,6000]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))//400
// console.log(returnSecondValue([200,400,500,6000]))//400


