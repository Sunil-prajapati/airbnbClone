// === functional scope ====
function a(){

}
// ====== block scope =======
{

}

// ==== Global scope ====
var a = 10;
console.log(a)

// === Block scoped ====
// 1.we can get the value of let and const in the block scope 
{
    var b = 3
    let b = 4  
}

// console.log(b) // b is not defined


// ================ variabel Shadowing ==========

function test(){
    let a = "Hello"
    var b = "kar lo"

    if (true){
        let a = "Hi"
        console.log(a)
        let b = "chak lo"
        console.log(b)
    }
    console.log(a)
    console.log(b)
}
test()

// ===== declartion of variable ==========
// 1. We can declare same variable but the scope should be different in case of LET and CONST 
let z
{
    let z
}
// ======
// we need intialize for const any value before declaring 
let d;
// const f;  //Missing initializer in const declaration


// temperal dead zone is in the scope but not declared 


// =========  HOISTING =======
// NOTE: aCCESS BEFORE INTIALIZE

name()
console.log(x)

var x = 7; // if we use let then it will show cannot access before intialization

function name(){
    console.log("java script name ")
}

// it shows error because it works as another variable 
var name = () => {
    console.log("java script name ")
}

// var can only be global and function scope it's all depends upload declaration 
// var variables can be re-declared and updated
// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

// let is block scoped
// let can be updated but not re-declared.

// const declarations are block scoped
// const cannot be updated or re-declared
//  only on object we can update the const