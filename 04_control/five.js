const coding=["js","rb","py","java","cpp"]
// coding.forEach(function (item){
//     console.log(item)//js
// // rb
// // py
// // java
// // cpp
// })


// coding.forEach( (item)=>{
//     console.log(item)//js
// // rb
// // py
// // java
// // cpp
// })


// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const mycoding=[
    {
        languageName:"java",
        languagefileExt:'js'
    },
    {
        languageName:"javascript",
        languagefileExt:'java'
    },
    {
        languageName:"c++",
        languagefileExt:'cpp'
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName);
})