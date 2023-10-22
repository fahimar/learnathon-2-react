import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./button";

function App() {
  return (
    <div className="App">
      {/*<h1>Hello World</h1>}
      {/*<button>click Me</button>*/}
      <Button size="lg" color="red" variant="" />
      <Button size="sm" color="blue" variant="" />
    </div>
  );
}

export default App;
