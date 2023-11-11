import React, { useContext } from "react";
import { CounterContext } from "../context/counterContext";

const Homepage = () => {
  const countValue = useContext(CounterContext);
  console.log({ countValue });
  return <div> THis is a Homepage</div>;
};

export default Homepage;
