// const person ={
//     name: "Jude",
//     age: 25,
//     'state of origin': 'lagos',
//     return(){
//         return `My name is ${this.name} and 
//         I am ${this.age} years old. 
//         I am from ${this['state of origin']}.`
//     },
//     0: 'zero'
// }
// person.town = 'Ikeja';
// console.log(person);
// console.log(person.return());

const values = [12,35,6,78,4,29,76,77,30]
// function sum (a,b,c,d,e,f,g,h,i){
//     return a + b + c + d + e + f + g + h + i;
// }
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const even = values.filter(num => num % 2 === 0)   
console.log(even);
const incrby5 = values.map(num => num + 5)
console.log(incrby5);
const incrmult2by10= values.map(num => num % 2 === 0 ? num + 10 : num)
console.log(incrmult2by10);
console.log(values.map(num=> num%2 ==0 && num%3 == 0 ? num%5 == 0: 'none'))