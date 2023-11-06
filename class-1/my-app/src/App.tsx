import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./button";
import Sidebar from "./sidebar";

function App() {
  // Create sidebar items
  const sidebarItems = [
    { id: 1, label: "Home", onClick: () => console.log("Home clicked!") },
    { id: 2, label: "Profile", onClick: () => console.log("Profile clicked!") },
    {
      id: 3,
      label: "Settings",
      onClick: () => console.log("Settings clicked!"),
    },
  ];
  return (
    <div className="App">
      <Sidebar items={sidebarItems} />
      {/*<h1>Hello World</h1>}
      {/*<button>click Me</button>*/}
      <Button size="lg" color="red" variant="" />
      <Button size="sm" color="blue" variant="" />
    </div>
  );
}

export default App;
