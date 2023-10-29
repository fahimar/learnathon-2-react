import { useState } from "react";

function FunctionalComponent(props) {
  const [count, setCount] = useState();
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Count Value: {count}</p>
      {/*<p>Value: {value}</p>*/}
      {props.isLoggedIn ? <p>User logged in</p> : <p>User logged out</p>}
    </div>
  );
}

export default FunctionalComponent;
