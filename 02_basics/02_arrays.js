const marvel_heros=["thor", "Ironmasn","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'thor', 'Ironmasn', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1])//flash

const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)//[ 'thor', 'Ironmasn', 'spiderman', 'superman', 'flash', 'batman' ]

const all_newhero=[...marvel_heros, ...dc_heros]
// console.log(all_newhero)//[ 'thor', 'Ironmasn', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array=[1,2,3,[4,5,6,[7,8,9,[1,5,7,[4,7,8]]]]]
const real_another_array=another_array.flat(5)// 5 is the depth of another
//array and we can also use Infinity
// console.log(real_another_array);


// console.log(Array.isArray("sulekha"))// check wheather it is array or not 
// console.log(Array.from("sulekha"))// covert into array 
// console.log(Array.from({name:"sulekha"}))// it give an empty array '[]'
//## important =>we have to tell covert into key into arry or value into array

let score1=100
let score2 =100
let score3 =300
console.log(Array.of(score1,score2,score3));
