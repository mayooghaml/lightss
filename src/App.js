import React from "react";
import "./App.css";
import BulbGlow from "./components/BulbGlow";

function App() {
  function switchChanged(switchBtn, switchPos) {
    switchBtn.innerText = switchPos;
  }
  return (
    <div className="AppWrapper">
      <BulbGlow switchClick={switchChanged} num="1" />
      <BulbGlow switchClick={switchChanged} num="2" />
    </div>
  );
}

export default App;
