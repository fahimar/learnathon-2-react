import React, { useState } from "react";
import style from "./index.module.css";

function app() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div className="{styles.counter}">Counter</div>
    </div>
  );
}

export default app;
