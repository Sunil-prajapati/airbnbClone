"use strict";
// ===Hosting =====
function a(){
    console.log(b)
    var b = 10;
}
// a();

// ==== map vs foreach =======

// foreach modify the original array but map not 

// chain stuff on map like using .filter

const arr = [2,3,4,5];

const mapArray =  arr.map((each) => {
    return each + 2; 
})

const forEachArray =  arr.forEach((each,i) => {
    arr[i] =  each + 3;
})

// console.log(mapArray,forEachArray,arr)


// ==== null vs undefined

//1. null is object 
//2. undefined is declared but value is not intialized yet

let c;
// console.log(c)    //undefined

// ======not defined 
// console.log(z)   // not defined 

a = 19
// console.log(a)

// ======== problems question =======
const array1 = [1,2]
const array2  = [4]
let finalArray = []

let whichArrayIsGreator = array1.length > array2.length? array1:array2;
    for(let i = 0;i <= whichArrayIsGreator.length; i++){
            if(whichArrayIsGreator[i] <  array2[i]){
                console.log(whichArrayIsGreator[i])
                console.log(array2[i])

                finalArray.push(whichArrayIsGreator[i])
            }
            else{
                // console.log("in else ===")
                console.log(whichArrayIsGreator[i])
            }
    }
    // console.log(finalArray)





