// class Teacher{
//     constructor(name, course){
//         this.name = name;
//         this.course = course;
//     }
// }
// const teacher1 = new Teacher('Francis', 'Computer Programming')
// console.log(teacher1)

// class BankAccount{
//     #accountBalance = 0//private property

//     deposit(amount){
//         this.#accountBalance += amount
//     }
// }

class Animal{
    constructor(name){
        this.name = name
    }


    makeSound(){
        console.log('The animal makes a generic sound.')
    }
}

class Dog extends Animal{
    makeSound(){
        console.log(`${this.name} barks.`)
    }
}

class Cat extends Animal{
    makeSound(){
        console.log(`${this.name} meows.`)
    }
}

const animal1 = new Dog('Rex')
const animal2 = new Cat('Felix')

console.log(animal1.makeSound())
console.log(animal2.makeSound())