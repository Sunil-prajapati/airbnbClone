// Scope: where u can access specific a  value or function in our code 

function a(){
    console.log(b)
}
let b = 10;
a();

// =========

// function a(){
//     function c(){
//      console.log(b);
//     }
//     c();
// }
// let b = 10;
// a();

// ===========

function a(){
    let b = 10;
    function c(){

    }
    c();
}
a();
console.log(b);
