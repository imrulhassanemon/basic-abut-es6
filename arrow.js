// function add (a, b){
//     const result  = a + b;
//     return result
// }

// const sum =  add(5, 90)
// console.log(sum)

// function add(a, b){
//     return a + b
// }

const add2 = function (a, b){
    return a + b;
}

const add3 = (a, b) => a + b;
const add = add3(4, 2)
console.log(add);


const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const sum = add4(1, 2, 3, 4);
console.log(sum)

const multiply = (num1, num2) => num1  * num2;

console.log(multiply(10, 4))


// normal function 

// function add4(a, b){
//     return a + b
// }

// function expression 

// const add5  = function(a, b){
//     return a + b
// }


// arrow function 
const add5 = (a, b) => (a + b);
const add6 = add5(2, 3)
console.log(add6)