import { useState, useCallback } from "react";
import { TodoListProps } from "../styles/types";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListProps) => {
  const [counter, setCounter] = useState<number>(1);

  const handleCounter = () => {
    setCounter((pre) => pre + 1);
  };

  const handleSOmethign = useCallback(() => {
    console.log("From todo item");
  }, []);

  return (
    <>
      <ul>
        {(props?.todoList ?? []).map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </>
  );

  // return (
  //   <>
  //     <button onClick={handleCounter}>{`Count ${counter}`}</button>
  //     <ul>
  //       {(props?.todoList ?? []).map((todo) => (
  //         <li key={todo?.id}>
  //           <TodoItem {...todo} callback={handleSOmethign} />
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};

export default TodoList;
