import React, { useReducer, useState } from "react";
import styles from "./counter.module.css";
import "./counter.scss";
import { styled } from "styled-components";
import { useEffect } from "react";
// import styled from "styled-components";
const Counter = () => {
  const Button = styled.button`
    padding: 10px;
    margin: 4px;
    width: 100px;
    border-radius: 5px;
    color: blue;
    background-color: white;
  `;

  // const Button = styled.button`
  //   padding: 10px;
  //   margin: 4px;
  //   width: 100px;
  //   border-radius: 5px;
  //   color: blue;
  //   background-color: red;
  // `;
  const reducer = (state, action) => {
    // update states
    if (action.type === "increment") return state + action.payload;
    else if (action.type === "decrement") return state - 1;
    return state;
  };
  const [count, setCount] = useState(0);
  // const [value, setValue] = useState(null);
  const [value, dispatch] = useReducer(reducer, 0);
  const handleCount = () => {
    // setCount(count + 1); // schedule
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    console.log({ count });
  };
  useEffect(() => {
    console.log("I am in useEffect");
    // const intervalId = setInterval(() => console.log("I am effect"), 100);
    // return () => clearInterval(intervalId);
    // const values = localStorage.getItem("values"); //undefined
    // setValue(values || "null"); // without '[]' empty array loop will not occure
    // for [] array, object -> every time there sets reference that's why infinity loop
    // return () => {
    //   console.log("I am out useEffect");
    // };
  }, [count, value]);

  const WithFunctionality = (props) => {
    const [value, setValue] = useState(0);
    const handleValue = () => setValue((prev) => prev + 1);
    return props.render(value, handleValue);
  };
  //  export default WithFunctionality;
  const costlyFun = (num) => {
    let sum = num;
    for (let i = 0; i < 1000000000; i++) {
      sum = num;
    }
    return sum;
  };
  console.log(costlyFun(5));
  return (
    <div className={styles.counter}>
      Counter
      <p>This is Counter : {count}</p>
      <p>This is Value: {value}</p>
      {/* <button className="button-primary item-1">Button 1</button>*/}
      <Button onClick={handleCount}>Button 1</Button>
      <button
        className="button-secondary item-2"
        onClick={() => dispatch({ type: "increment", payload: 5 })} // increment or decrement
        // action is occuring in dispatch
      >
        Button 2
      </button>
    </div>
  );
};

export default Counter;

// Higher order function
// like Render props
const sum = (a, b, fn) => {
  let result = a + b;
  return fn(result);
};
sum(1, 2, (result) => {
  console.log({ result }); //props
});
