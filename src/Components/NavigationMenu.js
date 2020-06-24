import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <ul onClick={props.closeMenu}>
        <li className="text-blue-500 py-3 border-b">
          <Link to="/">Home</Link>
        </li>
        <li className="text-blue-500 py-3 border-b">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
