// ======= function declaration 

function square(num){
    return num * num;
}
square(4)

// ===function expression ====

const squareExpression = function (num){
    return num * num;
}
squareExpression(2)

// ========= first class function =======
// pass a function into another function as argument is called first class function 

function Firstsquare(num){
    return num * num;
}

function displaySquare(fun){
    return "Square is "+ fun;
}

// displaySquare(Firstsquare(5))

// ======= IIFE =======

(function iifeSquare(num){
    return (num * num)
})(5); 

// ======== function scope =======
for(let i = 0; i < 5; i++){   // output will change on base of LET and VAR 
    setTimeout(function(){
        return(i)
    },i * 1000)
}

// ====== function hosting =======
// 1. function is properly hoisting 
// 2. variables not 

functionName();
function functionName(){
    console.log(x)    // undefined 
    var x = 10
    // console.log("Coder")
}

// ====== variable hosting to just compare with functional hoisting =======

// console.log(a) // cannot access before intialization
const a = 10  

// console.log(b)  // undefined
var b = 10


// ==== tricky question ======
// Output: undefined

// Reason: because we have x in the local so it does not go to the global to check its value and as we know before initialize of any
// value if we try to use it gives undefined

// NOTE: if we reomve var x = 20 from local then it will print 21 of global scope 
var x = 21
function value(){
    // console.log(x)
    var x = 20
}
value()


// ======== parms vs argument ====

function square(num){  // params
    return num * num;
}
square(4) //Arguments


// ===== spread and rest ======
// NOTE : same syntax but functionality depends where we use 

function mul(...num){  // REST operator when we get value 
    console.log(num[0] * num[1])
}
var arr = [3,5]
mul(...arr)  // SPREAD operator when we pass value 

// ======== Question =====
// NOTE: spread and rest operator should be last one so, it takes all of the remaining 

const fn = (a,x,y,...numbers) => {
    console.log(a,x,y,numbers)
}
fn(2,4,6,7,8,9) 



// ==== callBack function ========
// example: setTimeOut,filter,reduce and eventListner so.. on 

function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = console.log('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);


//   ===== Arrow Function ======
// 1.syntax
// 2.implicit "return" keyword (if we have one line of code then we can write on same line without return keyword)
// 3.Arguments: in arraow function we don't have arguments 
// 4.this keyword refeer global in Arrow function but in normal function it refeers to the parent object

function add(q,b){
    return q+b;
}

const Arrowadd = (a,b) => a+b;
// ===================
function fnu(){
    console.log(arguments)
}
fnu(1,3,4,5)

const Arrowfnu = () => {
    console.log(arguments)
}
Arrowfnu(1,3,4,5)
// ===========
let users = {
    name:"Ronak",
    rc1:() => {
        console.log("user name is:",this.name)  // undefined
    },
    rc2() {
        console.log("user name is:",this.name)
    }
}

// users.rc1()
// users.rc2()

// ======= callback function ========
// function passed into another function as an argument, which is then invoked inside the outer function
//  to complete some kind of routine or action.

function greeting(name){
    console.log("Namste "+ name)
}

function main(callBack){
    var result = console.log("what is your name")
    callBack(result)
}
main(greeting)


// ==========  question ======
ab()
b()
function ab(){
    console.log("a function statement and declaration are same")
}

var b = function (){
    console.log("a function expression")
}

var c = function xy(){
    console.log("named function expression")
}
xy()

  