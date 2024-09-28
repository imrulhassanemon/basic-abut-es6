const person = {
    name: "Imrul",
    age: 20, 
    phone: "0814832984298",
    money: 1234383489
}

// const {money} = person
// const {phone} = person
// const {name} = person


const {name, phone, money: taka} = person;


console.log(name);
console.log(taka);
console.log(phone);

// array distructuring 

const number = [2, 3];
const [first, second] = [12, 64];
console.log([first, second])



function doubleThem(a, b){
    return [a*2, b*2]
}

const [prothom, ditiyo] = doubleThem(10, 20);
console.log(prothom, ditiyo)




const a =( a, b ) => {
     const a2 = a * 2;
     const b2 = b * 2;
     const helo = console.log(a2, b2)
     return helo;
    
}
// console.log(a2, b2)
a(20, 40)

