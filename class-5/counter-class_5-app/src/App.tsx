import React from "react";
import "./App.css";
import { CounterProvider, useCounterContext } from "./CounterContext";

function App() {
  const { count, increment, decrement } = useCounterContext();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

function AppWithProvider() {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
}

export default AppWithProvider;
