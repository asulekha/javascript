const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:"swift by apple"
}
for (const key in myObject) {
    console.log(key)// print all the key of object 
    console.log(myObject[key])//give all key
}

const program=["js","rb","py","java","cpp"]
for(const key in program){
    console.log(key)// it will give index
}
// Maps
const map=new Map()
map.set('IN',"india")
map.set("usa","USA")
map.set("fr","france")
map.set('IN',"india")
for (const key in map) {
    console.log(key)// not iterratable
}