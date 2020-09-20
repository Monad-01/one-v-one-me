import React from "react";
import "./Roshambo.css";
import scissorsImage from "./Images/temp-scissors.webp";
import rockImage from "./Images/temp-rock.webp";

function Roshambo() {
  return (
    <div class="game-container">
      <div class="rock">
        <h1>rock</h1>
        <img
          src={rockImage}
          onClick={() => {
            console.log("Rock was clicked");
          }}
        />
      </div>
      <div class="paper">
        <h1>paper</h1>
        <img
          onClick={() => {
            console.log("Paper was clicked");
          }}
        />
      </div>
      <div class="scissors">
        <h1>scissors</h1>
        <img
          src={scissorsImage}
          onClick={() => {
            console.log("Scissors was clicked");
          }}
        />
      </div>
    </div>
  );
}

export default Roshambo;
