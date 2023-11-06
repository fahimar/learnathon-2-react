import React from "react";
import styles from "./counter.module.css";
import "./counter.scss";
import { styled } from "styled-components";
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

  return (
    <div className={styles.counter}>
      Counter
      <p>This is Counter</p>
      {/* <button className="button-primary item-1">Button 1</button>*/}
      <Button>Button 1</Button>
      <button className="button-secondary item-2">Button 2</button>
    </div>
  );
};

export default Counter;
