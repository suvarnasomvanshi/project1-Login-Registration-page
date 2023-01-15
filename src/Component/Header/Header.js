import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    // navRef.current.classList.toggle("toggle-navbar");
    setToggle(!toggle);
  };

  return (
    <div className={header.navbar}>
      <h1 className={header.logo}>UI/UX.</h1>
      <nav className={toggle ? header.toggleNavbar : ""}>
        <NavLink to="/">
          <p className={header.text}>Home</p>
        </NavLink>
        {/* <NavLink to="/AboutUs">About us</NavLink> */}
        <NavLink to="/Login">
          <p className={header.text}>Log In</p>
        </NavLink>
        <NavLink to="/Register">
          <p className={header.text}>Register</p>
        </NavLink>
        <NavLink>
          <i className="material-icons">
            <p className={header.text}>account_circle</p>
          </i>
        </NavLink>

        <div className={header.btn}>
          <button className={header.btnClose} onClick={toggleNavbar}>
            <i className="material-icons">
              <p className={header.text}>close</p>
            </i>
          </button>
        </div>
      </nav>
      <div className={header.btn}>
        <button className={header.btnMenu} onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Header;
