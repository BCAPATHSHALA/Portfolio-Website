import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import "./ResponsiveSideMenubar.css";

function SideMenu() {
  return (
    <div className="sidemenu " id="sidemenu">
      <div className="logoContainer">
        <h1 className="logo">
          MK <span className="span1">.</span> <span>.</span>
        </h1>
      </div>
      <nav className="navContainer">
        <ul>
          <Link className="link-1 link" to="/introduction">
            <i className="fa-solid fa-house-chimney"></i>
            <p>Home</p>
          </Link>
          <Link className="link-2 link" to="/portfolio">
            <i className="fa-solid fa-briefcase"></i>
            <p>portfolio</p>
          </Link>
          <Link className="link-3 link" to="/about">
            <i className="fa-solid fa-user"></i>
            <p>about</p>
          </Link>
          <Link className="link-4 link" to="/services">
            <i className="fa-solid fa-server"></i>
            <p>services</p>
          </Link>
          <Link className="link-5 link" to="/contact">
            <i className="fa-solid fa-comments"></i>
            <p>Contact</p>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
