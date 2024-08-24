// let obj = {
//     name: "peter"
//   };
//   let user = obj;
//   user.name = "bruce";
//   console.log(obj); // refrence copy
  // when we assign any object to any other object then that refrence will copy not data

  // but when copy value that value will copy not refrence e.g below
//   let x = 2;
//   let y = x;
//   y = 3;
//   console.log(x);


//1. Shallow copy : ONLY WORKS For ONE LEVEL 
let obj = {
    name: "peter"
  };

// way to do shallow copy 
//   let user = Object.assign({},obj);
  let user = {...obj};
  user.name = "bruce";
//   console.log(obj); 



// ==========
// DEEP COPY : will not work when there is any function/date in the object 
// Solution is loadash

  let obj1 = {
    name: "peter",
    address:{
        city:"Amritsar",
        state:"Punjab"
    },
    getData:function(){
        return "all data is here"
    }
  };

// way to do shallow copy 
//   let user = Object.assign({},obj);
  let user1 = JSON.parse(JSON.stringify(obj1));
  user1.address.city = "ZIRAKPUR";
//   console.log(obj1); 





// ====== lodash 
let obj2 = {
    name: "peter",
    address:{
        city:"Amritsar",
        state:"Punjab"
    },
    getData:function(){
        return "all data is here"
    }
  };

// way to do shallow copy 
//   let user = Object.assign({},obj);
  let user2 = _.cloneDeep(obj)
  user2.address.city = "ZIRAKPUR";
//   console.log(user2); 
