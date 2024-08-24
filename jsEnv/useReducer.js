// useReducer
// . To manage and update the state
// . Use useReducer when you have multiple pieces of state that depend on each other or on complex logic. 
// Use useReducer when you want to optimize performance by avoiding unnecessary re-renders or calculations
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state?.count + 1 };
    case "decrement":
      return { count: state?.count - 1 };
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });

// first argument is function(reducer) and second is initial value
// we use state in array because we are setting initial value is object
// dispatch is use for update the state
// in dispatch you can pass type(action) and payload

function increment() {
  dispatch({ type: "increment" });
}

function decrement() {
  dispatch({ type: "decrement" });
}

// ============== second example============

function reducer(todos, action) {
  switch (action.type) {
    case "Add-todo":
      return [...todos, newTodo(action?.payload?.name)];
    default:
      todos;
  }
}

function newTodo() {
  return { id: Date.now(), name: name, isCompleted: false };
}

const [todos, dispatch] = useReducer(reducer, []);
const [name, setName] = useState("");

console.log(todos);

function handlesubmit() {
  dispatch({ type: "Add-todo", payload: { name: name } });
}
