const score=400
console.log(score);

const balance = new Number(100)
console.log(balance)
/*
const a = 100;
const b = new Number(100);

console.log(a == b);  // true  (value compare)
console.log(a === b); // false (type + value compare)

*/
// toString ->covert into string 
// toFixef(2)->fix number to 2 decimal places

const otherNumber =23.8966

console.log(otherNumber.toPrecision(3)) //23.9
// prcise value to 3 digit

const hundereds=1000000
console.log(hundereds.toLocaleString('en-IN'))// 10,00,000
///+++++++++++++maths++++++++++

console.log(Math)
console.log(Math.abs(-4))//4
console.log(Math.round(4.3))//4
//ciel
//floor
//math.min(4,3,7,9) give 3 and same with max
console.log(Math.random())// always b/w 0 t0 1

const min=10
const max=30

console.log(Math.floor(Math.random()*(max-min +1))+min)
