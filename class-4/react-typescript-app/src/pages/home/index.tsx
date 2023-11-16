import React from "react";
import { createContext, useEffect, useRef, useState } from "react";
import TodoList from "../../components/TodoList";
import { Axios } from "../../Axios";
import { Router, Route } from "react-router-dom";
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
  // return (
  //   <UserContext.Provider value={"user info"}>
  //     {/* Wrap your component with BrowserRouter */}
  //     <Router>
  //       <div className="list-container">
  //         {/* Use Route component to define your routes */}
  //         <Route path="/todos" component={TodoList} />
  //       </div>
  //     </Router>
  //   </UserContext.Provider>
  // );
};

export default Dashboard;
