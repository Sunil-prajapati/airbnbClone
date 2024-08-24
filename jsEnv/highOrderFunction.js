// A function which takes another function as argument and return a function is called Higher order function

function x() {
    console.log("Namaste")
}

function y(callBack){
    callBack()
}
console.log(y(x))

// =========== 2. problem without high order function =======
const radius = [3,1,2,4]
const calculateArea = function (radius) {
    const output  = []
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}

// console.log(calculateArea(radius))


const calculateCircumference = function (radius) {
    const output = []
    for(let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output
}
console.log(calculateCircumference(radius))


const calculateDiameter = function (radius) {
    const output = []
    for(let i = 0; i < radius.length; i++){
        output.push(2 * radius[i])
    }
    return output
}
// console.log(calculateDiameter(radius))


// ======= solve with high order function ======
const area = function (radius) {
    return Math.PI * radius * radius
};

const circumference = function (radius) {
    return 2 * Math.PI * radius
};

const calculate = function (arr,logic) {
    const output  = []
    for(let i = 0; i < arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}

Array.prototype.calculate = function (logic) {   // it will work same as map
    const output  = []
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(calculateArea(radius,area))
console.log(calculateArea(radius,circumference))

