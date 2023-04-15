import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            Vegemite <i class="fa-solid fa-dog" />
          </NavLink>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <i
              className={menuToggle ? "fa-solid fa-x" : "fa-solid fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
