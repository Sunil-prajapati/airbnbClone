// What is async
    // async is keyword which helps to create async function
    //Async function always return  a promise 

// whats is await 
    // await can only be used in async function
    // async await combo is use for handle Promise
// How async await works behind the scenes?


const p = new Promise((resolve,reject) => {
    resolve("Promise resolve value")
})
async function getData(){
    return p  // if we returning promise(p) then it will not wrapped in new promise 
                    // but in any other case it wraps in promise
}
const data = getData()
data.then(res => console.log(res))



// 2. ================ AWAIT ==================
// one await wait for upper await code to execute first

const pAwait = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise with await")
    },10000)
    
})

async function handlePromise(){
   const res =  await pAwait
   console.log(res)
}
handlePromise()

// === FETCH ====
// fetch is promise and it gives response in readable stream then convert into json
