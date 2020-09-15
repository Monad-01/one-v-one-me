import React from "react";

function Roshambo() {
  return (
    <div>
      <h1 onClick={() => console.log("You clicked rock")}> Rock </h1>
      <h1> Paper </h1>
      <h1> Scissors </h1>
    </div>
  );
}

export default Roshambo;
