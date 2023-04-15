import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            Vegemite
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
