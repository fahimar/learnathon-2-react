import React from "react";
import styles from "./counter.module.css";
import "./counter.scss";

const Counter = () => {
  return (
    <div className={styles.counter}>
      Counter
      <p>This is Counter</p>
      <button className="button-primary">Button 1</button>
      <button className="button-secondary">Button 2</button>
    </div>
  );
};

export default Counter;
