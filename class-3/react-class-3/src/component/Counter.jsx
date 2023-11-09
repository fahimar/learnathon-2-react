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
    if (action === "increment") return state + 1;
    else if (action === "decrement") return state - 1;
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
  return (
    <div className={styles.counter}>
      Counter
      <p>This is Counter : {count}</p>
      <p>This is Value: {value}</p>
      {/* <button className="button-primary item-1">Button 1</button>*/}
      <Button onClick={handleCount}>Button 1</Button>
      <button
        className="button-secondary item-2"
        onClick={() => dispatch("decrement")} // or increment
      >
        Button 2
      </button>
    </div>
  );
};

export default Counter;
