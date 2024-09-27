const a = 20;
const b = 30;

const result = "The sum of " + a + " and " + b + " is " + (a+b);
console.log(result)

const math = `The sum of ${a} and ${b} is ${a+b}`
console.log(math)


const numbers = [45, 48, 98, 78]
const student = {name: "jhon doe", age: 41}
// const math2 = `The sum of ${numbers[0]} and ${b} is ${a+b}`
const math2 = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
console.log(math2)