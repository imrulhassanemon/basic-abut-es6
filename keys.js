const glass = {
    name: "glass",
    color: 'golden',
    price: 12, 
    isClean: true
};
console.log(glass);

const keys  = Object.keys(glass);
const values = Object.values(glass);
console.log(keys, values);


const entries = Object.entries(glass);
console.log(entries)
// delete glass.isClean;
// console.log(glass)

console.log(glass)
const {isClean, ...shortGlass} = glass

console.log(shortGlass);


// freez 

Object.freeze(glass);    
glass.source = "made in chaina";
console.log(glass);


