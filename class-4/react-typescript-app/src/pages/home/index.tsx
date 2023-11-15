import React from "react";
import { createContext, useEffect, useRef, useState } from "react";
import TodoList from "../../components/TodoList";
import { Axios } from "../../Axios";

//https://jsonplaceholder.typicode.com/users/2

export const UserContext = createContext<string | null>(null);

const Dashboard = () => {
  const [value, setValue] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const isDataFetched = useRef<boolean>(false);
  const [userData, setUserData] = useState("User info");
  useEffect(() => {
    if (isDataFetched.current) return;

    fetchUserData().then((res) => {
      setValue(res);
    });
    isDataFetched.current = true;
  }, []);

  const fetchUserData = async () => {
    const responseData = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((res) => res?.data?.data); //res?.data?.data);

    return responseData;
  };

  return (
    <UserContext.Provider value={"user info"}>
      <div className="list-container">
        <TodoList todoList={todoList} />
      </div>
    </UserContext.Provider>
  );
};

export default Dashboard;
