import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Counter from "./component/Counter";
import Homepage from "./pages/Homepage";
import User from "./pages/User";
import Users from "./pages/Users";

const routes = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/counter", element: <Counter /> },
  { path: "users", element: <Users /> },
  {
    path: "user/:id", // dynamic the path
    element: <User />,
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  {
    // return ();
    /*<Counter />*/
  }
  return <RouterProvider router={routes} />;
}

export default App;
