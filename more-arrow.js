const difference = (x, y) => x - y;
const multiply = (frist, second, third) => frist * second * third;

// single parameter or no parameter 
const one = (a) => a.age ;

const student = {name: "maisha", age: 27}
const age = one(student)
console.log(age);


const two = (a) => a.age;
const st = {name: "imrul", age:29}
const ag = two(st)
console.log(ag);

const getThird = (a) => a[2];

const third = getThird([2, 3, 4, 1, 41])
console.log(third);

const doubleIt = num => num * 2 ;
const dbl = doubleIt(10);

console.log(dbl)


// no parameter

const getPi = () => Math.PI;
console.log(getPi());


const doMath =  (x, y , z) => {
    const sum = x + y + z;
    console.log(sum)
    const multi = x * y * z;
    console.log(multi);
    const result = sum + multi;
    return result; 
}

console.log(doMath(10, 10, 10))
