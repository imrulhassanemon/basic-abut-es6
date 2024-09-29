const numbers = [1, 2, 6, 8, 4];

for(const num of numbers){
    // console.log(num)
}


const chairman = "chairman vai kemon achen";

for(const char of chairman){
    // console.log(char)
}


const glass = {
    name: 'glass',
    color: 'golden',
    price : "12$",
    isClean: true
};

// for(const gls of glass){
//     console.log(gls)
// }

for(const glas in glass){
    // console.log(glas)
}


const keys  = Object.keys(glass);
console.log(keys);

for(key of keys){
    console.log(key)
}