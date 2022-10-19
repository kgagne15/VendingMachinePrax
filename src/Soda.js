import React from "react";
import {Link} from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>I AM SODA</h1>
      <h2><Link to="/">Go back</Link></h2>
    </div>
  );
}

export default Soda;