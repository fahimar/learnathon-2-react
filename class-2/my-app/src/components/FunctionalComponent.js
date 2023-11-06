import { useState } from "react";

function FunctionalComponent(props) {
  const [count, setCount] = useState(5);
  const [value, setValue] = useState("");

  if (props.isLoggedIn) {
    return <div>All is well!!</div>;
  }
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleIncreaseBy2 = () => {
    setCount(count + 2);
  };
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>
        Count Value: <span style={{ color: "lime" }}>{count}</span>
      </p>
      <button onClick={() => handleIncrease()}>Increase Value : </button>{" "}
      {/*If you need to pass arguments */}
      {/*Duplicate current line Shift+Alt+↓ */}
      <button onClick={handleIncreaseBy2}>Increase Value bY 2 : </button>
      {/* If you don’t need to pass arguments to the event handler, and performance is a concern, go with a direct function reference. */}
      {/*<p>Value: {value}</p>*/}
      {props.isLoggedIn ? <p>User logged in</p> : <p>User logged out</p>}
    </div>
  );
}

export default FunctionalComponent;
