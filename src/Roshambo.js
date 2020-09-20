import React from "react";
import rockImage from "./Images/temp-rock.webp";

function Roshambo() {
  return (
    <div>
      <img class="ro" src={rockImage} />
      <h1> Paper </h1>
      <h1> Scissors </h1>
    </div>
  );
}

export default Roshambo;
