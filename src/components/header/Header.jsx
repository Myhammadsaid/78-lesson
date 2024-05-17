import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import search from "../../assets/search.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="nav-links">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink to={"/admin"} className="nav-link">
                Admin
              </NavLink>
              <a className="nav-link">Blog</a>
            </div>
            <NavLink to={"/"}>
              <img src={logo} alt="header-logo" />
            </NavLink>
            <div
              className={`nav-links ${toggle ? "open" : ""}`}
              id="navbar-responsive"
            >
              <a className="nav-link">About Us</a>
              <a className="nav-link">Cart</a>
              <form className="header-form">
                <input
                  className="header-input"
                  type="text"
                  placeholder="Search Product"
                />
                <img className="search" src={search} alt="Search" />
              </form>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="menu-btn"
              id="menu-btn"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
