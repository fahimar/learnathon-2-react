// import logo from "./logo.svg";
import "./App.css";
//import { BasicClassComponent } from "./components/BasicClassComponent";

import { BasicClassComponent } from "./components/BasicClassComponent";
import ControlledUncontrolled from "./components/ControlledUncontrolled";
import FormHandling from "./components/FormHandling";
import FunctionalComponent from "./components/FunctionalComponent";
import ListAndKeys from "./components/ListAndKeys";

//E:\VivaSoft Frontend Developer\Learnathon 2.0\Learnathon 2.0 REACT\learnathon-2-react\class-2\my-app\src\components\BasicClassComponent.js
function App() {
  return (
    <div>
      <body>
        <div>
          <div className="App">
            <header className="App-header">
              <p>
                Welcome to React second class - Learnathon 2.0
                {/*<h1>This is a simple header from Class Component</h1> */}
              </p>

              {/* <BasicClassComponent></BasicClassComponent> */}
              {/* <FunctionalComponent
                name={"Fahim Al Rashid"}
                email={"fahimar14040@gmail.com"}
                isLoggedIn={false}
              ></FunctionalComponent> */}
              {/* <ListAndKeys></ListAndKeys> */}
              {/* <FormHandling></FormHandling> */}
              <ControlledUncontrolled></ControlledUncontrolled>
            </header>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
