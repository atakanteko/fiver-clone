import React from "react";
import MenuList from "./menu-list";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <MenuList />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
