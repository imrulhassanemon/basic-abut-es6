// default if value is not provided, take these as a defult value.


function add(num1 = 0 , num2 = 2){
    const resut = num1 + num2;
    console.log(num1, num2, resut)
    return resut;
}

add( 12, 1)

function fullName (first, last = 'kayes'){
    const full = first + ' ' + last
    return full
}

const name = fullName("imrul")
console.log(name)

function friends([]){
    // when result will array default parameter will [third braket]
}

function obj(cow = {}){
    
}