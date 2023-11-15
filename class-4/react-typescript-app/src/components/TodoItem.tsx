// import React from "react";
import { useContext } from "react";
import { TodoItemType } from "../styles/types";
import { UserContext } from "../pages/home";

// const TodoItem = React.memo((props: TodoItemType) => {
//   // console.log("something");
//   // return (
//   //   <div className="user-item">
//   //     {props?.title} <button onClick={props?.callback}>Click</button>
//   //   </div>
//   // );
//   return (
//     <div className="user-item">
//       {props?.title} - {props?.user}
//       {/* <button onClick={props?.callback}>Click</button> */}
//     </div>
//   );
// });
const TodoItem = (props: TodoItemType) => {
  // console.log("something");
  // return (
  //   <div className="user-item">
  //     {props?.title} <button onClick={props?.callback}>Click</button>
  //   </div>
  // );
  const context = useContext(UserContext);
  return (
    <div className="user-item">
      {props?.title} - {context}
      {/* <button onClick={props?.callback}>Click</button> */}
    </div>
  );
};
export default TodoItem;
