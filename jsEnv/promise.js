// Promise is basically use for asynchronous operation in JS

// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. 
// Tasks can run simultaneously. 
// Synchronous is a blocking architecture, 
// so the execution of each operation depends on completing the one before it. 
// Each task requires an answer before moving on to the next iteration

// promise have two things 
// 1. State 
        // pending
        // fullfilleds
        // rejected
// 2. Result 

// promise response is immutable

// Before Promise
// const cart = ['cart','shoes','pants','kurta']

// createOrder(cart)
// proceedToPayment(orderId)

// createOrder(cart,function (orderId){   //issue is inversion of code
//     proceedToPayment(orderId)
// })   //we are passing the function to another function

// // After Promise
// const promise = createOrder(cart);  //this will return promise e.g {data}

// createOrder(cart).then((orderId) => {
//      proceedToPayment(orderId)
// }).then((paymentInfo) => {
    // showOrderSummary(paymentInfo)
// }).then((paymentInfo) => {
    //  updateWallet(paymentInfo)
// })
// .catch((error) => {
//     console.log(error)
// })
// .then(() => {
//     console.log("No matter whats happens, i will definietely be called  ")
// })

// OR

// promise.then(function (orderId){    //we attached the proceedToPayment function with promise
//     proceedToPayment(orderId)
// })


const GITHUB_API = 'https://api.github.com/users/aksaymarch7'
const user = fetch(GITHUB_API)  //return a promise
// console.log(user)
user.then((data) => {
    console.log(data)
})

// CREATE A PROMISE 
// resolve and reject given by js to create promise
const pr = new Promise((resolve,reject) => {
    // validateCart
})
 

// after catch if there is any then that then will any how 