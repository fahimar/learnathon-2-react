import "./button.css";
interface BtnPropsType {
  size: string;
  color: string;
  variant: string;
}
import React, { useState } from "react";
// const Button = (props: { size: string }) => {
//   const { size } = props;
//   console.log(props);
//   return (
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       Button
//     </button>
//   );
// };

const Button = (props: BtnPropsType) => {
  const [count, setCount] = useState<number>(1);
  const { size, color, variant } = props;
  console.log(props);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="style" onClick={handleClick}>
      {size === "lg" ? "Dayeen button" : "Sadik button"}
      {count}
    </button>
  );
};
const Button_p = ({ size, color, variant }: BtnPropsType) => {
  // const  = props;
  // console.log(props);
  const style = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${size}`;
  return <button className="style">Button</button>;
};
export default Button;
