import { useState } from "react";

import "./App.css";
import SideNav from "./components/SideNav";
import Timeline from "./components/Timeline";
import Suggestions from "./components/Suggestions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Main">
        <div className="side">
          <SideNav />
        </div>
        <div className="Timeline">
          {" "}
          <Timeline />{" "}
        </div>
        <div className="Suggestions">
          {" "}
          <Suggestions />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
