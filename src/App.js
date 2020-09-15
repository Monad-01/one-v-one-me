import React from "react";

import "./App.css";

function App() {
  return (
    <div>
      <h1 onClick={() => console.log("You clicked rock")}> Rock </h1>
      <h1> Paper </h1>
      <h1> Scissors </h1>
    </div>
  );
}

export default App;
