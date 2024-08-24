// ====print all even number =====

for(let i = 0; i <= 10; i++){
  if(i%2 == 0){
    //   console.log(i)
  }
}

// ==== print tables =====

function printTable(whichTable,limitOfTable){
    for(let i = 1; i <= limitOfTable; i++){
        let table =  `${whichTable} * ${i}`+ " = " + (whichTable * i)
        console.log(table)
    } 
}
// printTable(3,10)

// ========== convert kilometers into miles =========
function convertor(kilometers){
    console.log(`${kilometers} km = ${kilometers * 0.62137} miles`)
} 
// convertor(105)


// ================sum of numbers within an array=============
let arrayWantsToSunm = [23,45,23,12,4,34,342,42];
let sum = 0
arrayWantsToSunm.forEach(element => {
    sum += element
})
// console.log(sum)

// =========== Create a function that reverses an array =====
let reversedArray = []
function reverseArray(array){
    for(let i = 0; i < Math.floor(array.length/2); i++){
        [array[i],array[array.length - 1 - i]] = [array[array.length -1 -i],array[i]]
    }
    console.log(array)
}
// reverseArray([23,45,23,12,4,34,342,42])


// ====== filters out negative numbers =======
function filterNegNum(array){
    let negativeNumber = array.filter(item => item < 0)
    console.log(negativeNumber)
}
// filterNegNum([23,45,-23,12,4,34,-342,42])


// ==============Remove the spaces found in a string ======
let stringWithSpaces = "i want to become successfull";
// console.log(stringWithSpaces.replace(/ /g, ""))


//============ Return the number of vowels in a string   ========
let vowelsArray = ["a","e","i","o","u"]
let countVowels = 0
let aVowelCount = 0
for(i = 0; i < stringWithSpaces.length; i++){
    if(vowelsArray.includes(stringWithSpaces[i])){
        if(stringWithSpaces[i] == "e"){
            aVowelCount += stringWithSpaces[i].length
        }
       countVowels += stringWithSpaces[i].length
    }
}
// console.log(countVowels)
// console.log(aVowelCount)

// ============= find smallest number from array ============

let twoArray = [43,232,424,1231,123]
let smallestNumber  = twoArray[0]
for(let i = 0;i < twoArray.length;i++){
    if(twoArray[i] < smallestNumber){
        smallestNumber = twoArray[i]
    }
}
// console.log(smallestNumber)

// ======= count true in  array =======
let countOfTrue = 0
function countTrue(array){
    array.forEach(item => {
        if(item){
            countOfTrue = countOfTrue + 1
        }
    })
}
countTrue([true,false,true,false,true])
// console.log(countOfTrue)

// ===how to find common key value pair of object 
const input1 = {a:1,b:2,c:3,d:10,e:12,sunil:7}
const input2 = {a:2,e:12,f:6,d:10,b:2,sunil:7}

let output = {};
Object.keys(input1).forEach((item) => {
  if (input2[item] === input1[item]) {
    output[item] = input1[item];
  }
});

console.log(output);


const input = [1,2,-2,11,7,1]


console.log({message:"what ever "})

// ======= 
{
    let a = 1
    let b= 2
   
    console.log(a)
    console.log(b)

}


function anyName(){
    let a = 1
    let b= 2
     var c = "sdh"  // with var it shows error but without var it becomes global scope 
    console.log(a)
    console.log(b)
}
anyName()
// console.log(c)
// console.log(a)  //when we get error here code will stop execution
// console.log(b)


// strict mode 
// when we enable the strict mode  it does not allow me use any variable without let var and const
// =================================
var x = 10 

function foo(){
    console.log(x,"x")  // calling before intilization (undefined)
    var x = 20
}
foo()

// ==========
fooo()

var fooo = 20
function fooo(){
    console.log("calling")
}
fooo()

