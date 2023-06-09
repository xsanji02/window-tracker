import { useState } from "react";
import { WindowWidth } from "./WindowWidth";
import "./App.css";

function App() {
  const [show, setShow] = useState(1);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="window-background">
      <div>
        <h1>Window Size Tracker</h1>
        <button onClick={handleToggle}>{show ? "Hide" : "Show"}</button>
        {show && <WindowWidth />}
      </div>
    </div>
  );
}

export default App;
