// import logo from "./logo.svg";
import React from "react";

import "./App.css";

function Home() {
  return (
    <div>
      <h1>Welcome to my Homepage</h1>
      <p>This is a simple React Homepage</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
};

export default App;
//rafce
