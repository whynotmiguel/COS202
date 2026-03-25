const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//numbers.filter(num => num % 2 === 0).forEach(num => console.log(num))
const favnum = numbers.filter(num => num >= 4)
//console.log(favnum)
console.log(4 == 2*2)
console.log(4 == '4')
console.log(4 === '4')
console.log(4 === 44)
console.log(4 === 4)

function great(n){
    return n >=4
}
function sqrrt(n){
    return n**0.5
}
console.log(great(90))
console.log(great(-90))
console.log(sqrrt(16))