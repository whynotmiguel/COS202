//let school:string = 'PAU'

//console.log(school)
function greet(name: string = "dear"): string {
  return `Hello ${name}`;
}

// Examples:
console.log(greet("Alice")); // Output: Hello Alice
console.log(greet());        // Output: Hello dear