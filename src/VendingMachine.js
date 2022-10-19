import React from "react";
import {Link} from "react-router-dom"

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <h2><Link to="/chips">Chips</Link></h2>
      <h2><Link to="/soda">Soda</Link></h2>
      <h2><Link to="/candy">Candy</Link></h2>
    </div>
  );
}

export default VendingMachine;
