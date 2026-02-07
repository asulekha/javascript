//for of

const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(val)
}//1 2 3 4 5

const greetings="Hello world"
for (const greet of greetings) {
    console.log(`Each chafr is ${greet}`)
}

// Maps
const map=new Map()
map.set('IN',"india")
map.set("usa","USA")
map.set("fr","france")
map.set('IN',"india")
console.log(map);//output->Map(3) { 'IN' => 'india', 'usa' => 'USA', 'fr' => 'france' }
// take unique pair and order remains maintain
for (const [key,value] of map) {
    console.log(key,':-',value)//IN :- india
// usa :- USA
// fr :- france
}

const myObject={
    'game':'NFS',
    'game2':"spiderman"
}
// for (const obj of myObject) {
//     console.log(key,':-',value)// give error object is not iteratable
// }

