import "./button.css";
interface BtnPropsType {
  size: string;
  color: string;
  variant: string;
}
import React from "react";
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
  const { size, color, variant } = props;
  console.log(props);
  return (
    <button className="style">
      {size === "lg" ? "Dayeen button" : "Sadik button"}
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
