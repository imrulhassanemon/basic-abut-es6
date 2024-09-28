

const max = Math.max(2, 3, 4, 22, 12, 48, 87);

console.log(max);

const numbers = [2, 21, 29, 27, 54, 49]

const arrayMax = Math.max(...numbers);
console.log(arrayMax);


const friends = [2, 2, 9, 7];
const vaiya = friends;
const cotovai = vaiya;

const vai = [...friends];
console.log(vai);
friends.push(200);
// console.log(friends);
console.log(friends);
console.log(vai)

const num = [...friends, 225];
console.log(num)