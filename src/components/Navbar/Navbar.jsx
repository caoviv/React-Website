import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NavbarStyles.css";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);
  const closeMobileMenu = () => setMenuToggle(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Vegemite <i class="fa-solid fa-dog" />
          </NavLink>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <i
              className={menuToggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
          <ul className={menuToggle ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Placeholder
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
