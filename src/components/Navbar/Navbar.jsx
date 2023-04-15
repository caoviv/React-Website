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
          <ul className={menuToggle ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleMenuToggle}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-links" onClick={handleMenuToggle}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-links" onClick={handleMenuToggle}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-links-mobile" onClick={handleMenuToggle}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
