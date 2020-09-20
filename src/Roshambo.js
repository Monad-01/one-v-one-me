import React from "react";
import "./Roshambo.css";
import rockImage from "./Images/temp-rock.webp";

function Roshambo() {
  return (
    <div class="game-container">
      <div class="rock">
        <h1>rock</h1>
        <img src={rockImage} />
      </div>
      <div class="paper">
        <h1>paper</h1>
      </div>
      <div class="scissors">
        <h1>scissors</h1>
      </div>
    </div>
  );
}

export default Roshambo;
