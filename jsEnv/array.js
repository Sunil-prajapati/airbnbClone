let items = [
    {
        name:'Bike',
        price:100,
    },
    {
        name:'car',
        price:966776,
    },
    {
        name:'Aeroplane',
        price:987898689,
    },
    {
        name:'ship',
        price:027343,
    },
    {
        name:'phone',
        price:100556,
    },
    {
        name:'ship',
        price:027343,
    },
   
  

]

const  objectToBeAdded =  {
    name:'car',
    price:100556,
}


// ====Filter does not change the parent array ====
// 1. when we print index which is second parmas then it removes first element from array 
const filteredItem = items.filter((item,index) => {
    return item.price < 977786;
})

// ===Find=====
const findItem = items.find((item) => {
    return item.name === "ship" 
})


// ====ForEach======
items.forEach ((item) => {
    return item.name
})

// ===Some return true or flase use when we need ans in boolean 
const inExpensiveItem = items.some((item) => {
    return item.price <= 10;
})


// ======== Every opposite of some also return true or false but it check each and every object of array ======

const ExpensiveItem = items.every((item) => {
    return item.price <= 1000000000;
})

// ===== Reduce   currentTotal always first params in reducer===========
const total = items.reduce((currentTotal,item ) => {
    return item.price + currentTotal;
},0)

// ==== includes for flat array =====

const data = [2,5,6,8,232,65,5,5,7,7]

data.includes(2)
// ====================================Problems==============================================

// ==== remove duplicate item from array =====
// Note: without set we can use forEach for rendering and includes for checking in array 
let unique = [...new Set(data)];

// ================= prevent to enter dublicate objects in array=======
// 1.The findIndex() method returns -1 if no match is found

const indexOfObject = items.findIndex(item => item.name === objectToBeAdded.name);
if(!(indexOfObject > -1)) { 
    items = [...items, objectToBeAdded];
}

// remove dublicate objects from array by key in js ====================
// 1.
const arr = [
    {place: "here",  name: "x", other: "other stuff1" },
    {place: "there", name: "x", other: "other stuff2" },
    {place: "here",  name: "y", other: "other stuff4" },
    {place: "here",  name: "z", other: "other stuff5" }
]
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
const arr1 = getUniqueListBy(arr, 'place')


// ================ remove any item from array ==========
// 1. first specifiy the position 2. how many you want to delete 
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let removed = array1.splice(2,2);

// =====Removing Array Items By Value Using Splice====
//1. splice change the parent array 
var arrValue = [1, 2, 3, 4, 5,5, 6, 7, 8, 9, 0];
    
for( var i = 0; i < arrValue.length; i++){ 

    if ( arrValue[i] === 5) { 
        arrValue.splice(i, 1); 
        i--;
    }

}
// ======= Slice =====
const currencyOfCompanyCreation = [
    {
      title: 'HKD',
      price: '8,600'
    },
    {
      title: 'EUR',
      price: '1,025'
    },
    {
      title: 'USD',
      price: '1,099'
    }
  ];
const citrus = currencyOfCompanyCreation.slice(1, 3);
console.log("==== citrus ")
console.log(citrus)


// ======== sorting array =======
const unSortedArray = [59987,7,2,66,22,7,87,344,1,33,23,2,456,1];
let temp
for (let i = 0; i < unSortedArray.length; i++) {
    for (let j = i; j < unSortedArray.length; j++) {  // for descending just change j = i into j= 0
        if(unSortedArray[i] > unSortedArray[j]){
            temp = unSortedArray[i]
            unSortedArray[i] = unSortedArray[j]
            unSortedArray[j] = temp
        }
    }
    
}
console.log(unSortedArray.sort((a,b) => a-b));
// console.log(unSortedArray)


var array=[1,2,3,4,5];
console.log(array.splice(2)); //output will be removed one

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2)); //output will be selected one


// console.log("----after-----");
// console.log(array); // original array is affected 
// console.log(array2); // original array is not affected 



const toFlat = [1,2,3,[4,5],[6,7,[8,9]]]
// console.log(toFlat.flat(2))  // covert nested array into flat array we can also remove empty element with this
                                // we can also use infinity when we don't know the lenth of nested array

const food = ["Olives","pasta", "ice-cream"]   
// console.log(food.at(-1)) 

// polyfilling

Array.prototype.at = function(index) {
    if(index < 0){
        return this[this.length -1]
    }
    return this[index]
}
console.log(food.at(-1))

