const arr = [1,2,3,4,5,6]

function getIncrease(n){
    return n+10
}

const names = ['franc', 'james', 'mona', 'louisa', 'violene']
const getUppercase = names.map(name => name.replace(name[0], name[0].toUpperCase()))

/*const even = arr.filter(num => num % 2 == 0)
const sum = arr.reduce((n, m) => n + m, 0)
const product = arr.reduce((n, m) => n * m, 1)
const iscontained = arr.includes(20)

console.log(iscontained)
console.log(getUppercase)
console.log(even)
console.log(sum)
console.log(product)*/
arr.sort((a, b) => b - a)
names.sort()
console.log(names)
//console.log(arr)

const stream1 = names

names.shift()
console.log(stream1)
console.log(names)
//console.log(stream1 == names)