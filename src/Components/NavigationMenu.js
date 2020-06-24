import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/"
            onClick={props.closeMenu}
            className="text-blue-500 py-3 border-b block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/product/:id"
            onClick={props.closeMenu}
            className="text-blue-500 py-3 border-b block"
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={props.closeMenu}
            className="text-blue-500 py-3 border-b block"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
