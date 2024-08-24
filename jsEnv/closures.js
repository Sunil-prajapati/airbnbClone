
// ====== closures: A function bind together with its lexical ENV  =======

function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    y()
}
x()

// we can return function itself in JS 
// when function return from another function they still maintane their lexical scope

function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    return y;    //when we return y it will also return closurer 
}
var z = x()
z()

// ==== another way to return function define and call same time

return function y(){
    console.log(a)
}

// ========= gotcha 

function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    var a = 100;
    return y;    
}
var z = x()
z()

// use of closures

// 1.Module design pattern
// 2.function like once (with the help of closures we can know how many time it run)
// 3.setTimeouts
// 4.iterators
// 5.maintaining state in async world
 