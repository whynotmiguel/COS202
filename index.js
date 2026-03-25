/*let score=80

score=10

myname='Maryam'

course = 'Programming'
var course 

function addnum(n){
    if (n==4){
        var y = 10
    }
    return y**2
}

console.log(score)
console.log(myname)
console.log(course)
console.log(addnum(4))
*/

let id= 12345

id =9876
console.log(id)

const persons = ['Maryam', 'Ali', 'Sara']
persons.push('ethan')
persons.unshift('John')

const females = ['uche', 'ogochukwu', 'nifemi']

persons.unshift(...females)
persons.pop()
persons.shift()
persons.splice(2, 0, 'david','kachi')
persons.splice(2, 1, 'michael')
console.log(persons)
console.log(persons[0])
console.log(persons.length)