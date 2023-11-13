import React from "react";
import { TodoItemType } from "../styles/types";

const TodoItem = React.memo((props: TodoItemType) => {
  console.log("something");
  return (
    <div className="user-item">
      {props?.title} <button onClick={props?.callback}>Click</button>
    </div>
  );
});
export default TodoItem;
