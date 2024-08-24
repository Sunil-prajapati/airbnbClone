//1.
  // because they compare memory allocation and it's always be different
  // if array is blank other wise it will compare value
  // let a = [];
  // let b = [];
  // console.log(a === b);
  // console.log(a == b);

  //2.
  // let c = [];
  // let d = c;
  // console.log(c === d);
  // console.log(c === d);

  //3.
  // let a = [20];
  // let b = [20];
  // console.log(a[0] === b[0]);

  //4.
  // when ever we use three dots then it will distructure
  // basically we get the data out form array or object
  // let z = [1, 2, 3, 4];
  // console.log(...z);

  //5.
  // console.log(typeof NaN);

  //6.
  // let data = 10 - +10;
  // console.log(data);

  //7.
  // let data = {name :'sin'}
  // console.log(delete data?.name)
  // console.log(data)

  //8.
  // let arr = [1, 2, 3];
  // let [y, z] = arr;
  // console.log(y, z);

  //9.merge two object
  // let obj1 = { a: 1, b: 2, c: 3 };
  // let obj2 = { d: 4, e: 6, g: 0 };
  // console.log({ ...obj1, ...obj2 });

  //10.
  // let newObj = { a: "sun", b: "lin" };
  // let info = { name: "sunil" };
  // console.log({ newObj, ...info });

  //11.
  // let newObj = { a: "sun", b: "lin",name:'sunil };
  // let info = { name: "sunil" };
  // console.log(...newObj,...info)

  //12.
  // or operator print value as he get +ve value
  // if we don't get +ve value then render last value
  // const result = false || {} || null
  // console.log(result)

  //13.
  // we can't access let before intialization
  // let name = "mohan";
  // function getName() {
  //   console.log(name);
  //   let name = "harmai";
  // }
  // getName();

  //14.
  // let name = "mohan";
  // function getName() {
  //   console.log(name);
  // }
  // getName();

  // 15.
  // function sumValues(x, y, z) {
  //   return x + y + z;
  // }
  // console.log(sumValues(...[1, 2, 3]));

  // 16.
  //when there two operation
  // javascript runs from left to right so, it first solve ! then ===
  // const code = "code step by step";
  // console.log(!typeof code === "object");
  // console.log(!typeof code === "string");

  // 17.
  // when we apply seal then we can't add and delete just update the exsicting value
  // let nameObj = { name: "Mohan" };
  // Object.seal(nameObj);
  // nameObj.name = "Soahn";
  // console.log(nameObj);

  // 18.
  // empty the space but length remains same
  // let del = ["sohna", "mohan"];
  // delete del[1];
  // console.log(del.length);

  // 19.
  // we can have same value in array but not in the object

  // 20.
  // let a = 2;
  // setTimeout(() => {
  //   console.log(a);
  // }, 0);
  // a = 100;

  //21
  // undefined
  // console.log(a)
  // var a

  //22
  //setTimeOut always run at the end of the stack
  // var varibale remains same afetr every setTimeOut: 3,3.3
  // let generate it's new variable in memory: 1,2,3
  // for (var i = 0; i < 3; i++) {
  //   setTimeout(() => console.log(i), 1);
  // }

  //23.
  // when we add + before anything it's type becomes number
  // console.log(+true);

  //24.
  // because when we copy object  then it location gets copy not it's value
  // let c = { name: "sunil" };
  // let d;
  // d = c;
  // c.name = "Prajapati";
  // console.log(c);

  //25.
  // we can't do with let
  // var x = 10
  // let x = "10"
  // console.log(x)

  //26
  // use-strict mean check thoroughly
  // function getAge(){
  //   'use-strict'
  //   age = 24
  //   console.log(age)
  // }
  // getAge()

  //27. eval change string into expression

  // 28.
  // we can use number in object for key name
  // let obj = {1:"0",a:"b"}

  //29.
  // in between if is there any code that will not execute
  // for(let i = 0; i< 5;i++){
  //   if(i === 3) continue
  //   console.log(i)
  // }

  //30.
  // when there are three onClick on button then when we click then first execute outer one

  //31.
  // console.log(typeof typeof 1)

  //32.
  // call function then arrow function return 0 so again we call function that's why it gives 0
  // function sayHi() {
  //   return (() => 0)();
  // }
  // console.log(sayHi());

  // 33.
  //gives u three undefined/empty and add value at the sixth position
  // let addArray = [2, 3, 4];
  // addArray[6] = 11;
  // console.log(addArray);

  //34.
  // setInterval gives unique ID

  //35.
  // const people = ["SUnil", "Rohan", "Sohan"];
  // const peopleCopy = [...people];
  // peopleCopy[2] = "Mohan";
  // console.log(peopleCopy);

  //36. ARRAY FOUR NEW METHODS
  // Gives copy of array
  // 1.with()
  // 2.toSorted() (without changing parent array and don't need to make a copy)
  // 3. toReversed()
  // 4. toSpliced()

  // const people = ["SUnil", "Rohan", "Sohan"];
  // const newPeople = people.with(2, "mohan");
  // const oldSortWay = [...people].sort() need to loop twice in this case
  //const sorted = people.toSorted(); //loop only one time
  // const reversed = people.toReversed();
  // console.log("original", people);
  // console.log("new one", reversed);

  //37.
  // const a = [1,2,3,4]
  // const b =[5,6,7,8]
  // const c = [...a,...b]
  // console.log(c)

  //38.
  // CONVERT ARRAY INTO OBJECT
  // const a = [1, 2, 3];
  // const b = { ...a };
  // console.log(b);
  // let obj = a.reduce((a, it, i) => ({ ...a, [i]: it }), {});
  // console.log(obj);

  //39.
  // string number compared by each character
  // below console.log() will give true because 9 is greater then 1
  // console.log("9" > "11")

  // 40.
  // first want to resolve setTimeout then run rest of the code
  // async function main() {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("Hello"), resolve();
  //     }, 1000);
  //   });
  //   console.log("world");
  // }
  // main();

  //41.
  // we should use setHtml() instead of ineerGHtml because it sanitize it

  //42.
  // display inline block property : div fits acc to content in it

  //43.
  // useMemo for functions of functional component: memoize a function
  // memo for function component: higher-order component to memoize an entire functional component.

  //44.
  // to stop form input re-rendering we can use useRef()

  //45.
  // ssr
  // ssp

  // 46.
  // how we can limiting the rate of execution of api call
  // debouncing:÷
  // difference between two key stroke(click events) while searching in search bar for example
  // debouncing is best solution in the case of searching

  // throttling:(after particular time it will run)
  // use throttling when there is variation in performing task(event)
  // diff b/t two function call time

  //47.
  // const toSort = [
  //   {
  //     "_id": "64817a58be4ef60dd60ef49e",
  //     "paidDate": "2023-06-08T00:00:00.000Z",
  //     "paymentType": "Cheque",
  //     "paidAmount": 10,
  //     "paymentProof": "https://invoice-management-docs-dev.s3.ap-southeast-1.amazonaws.com/invoice-group-image%20%281%29%20%281%29.png"
  //   },
  //   {
  //     "_id": "64880cb9d1683151aa60e61d",
  //     "paidDate": "2023-06-13T00:00:00.000Z",
  //     "paymentType": "Cheque",
  //     "paidAmount": 10,
  //     "paymentProof": "https://invoice-management-docs-dev.s3.ap-southeast-1.amazonaws.com/dashboard-invoice-red.png"
  //   }
  // ];
  // const reverseIt = toSort.reverse();
  // console.log(reverseIt);

  // Dom give us api

  // className returns html collection we can't use map and for loop 
  //querySelectorall returns node and we can use foreach 
  // but we can convert into array 
  
  
  // event capturing from the parent to child
  // event bubbling from child to parent 


// why we use react 
  // 1. react is declarative 
        // in this we can make component 
        // handle th re-rendering things 
        // make folder structure 
        // can expand our project 

// 001. how we can write useEffect function it's run only once in react js
  // by dependcy Array

//   What is a Hook?
// Hooks allow us to "hook" into React features such as state and lifecycle methods.


// There are 3 rules for hooks:

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional
