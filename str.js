/*const song = `twinkle
twinkle
little star`

const rhyme = 'twinkle \n\ntwinkle\n\t little star'

console.log(song)
console.log(rhyme)*/

let myName = 'Miguel'
let state = 'Lagos'
let age = 18
let intro = `My name is ${myName}, I am ${age} years old and I live in ${state}. I was born in ${new Date().getFullYear() - age}.`

intro = intro.toUpperCase()
intro = intro.toLowerCase()

console.log(intro)
console.log(intro.indexOf('m'))
console.log(intro.lastIndexOf('m',4))
console.log(intro.indexOf('Lagos'))