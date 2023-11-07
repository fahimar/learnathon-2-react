import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Counter from "./component/Counter";
import Homepage from "./pages/Homepage";

const routes = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/counter", element: <Counter /> },
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
