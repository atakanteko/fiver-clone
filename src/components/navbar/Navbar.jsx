import React from "react";
import MenuList from "./menu-list";
import useScrolled from "../../hooks/useScrolled";

const Navbar = () => {
  const isScrolled = useScrolled();
  const isIntersected = useScrolled(130);
  console.log(isIntersected);
  return (
    <section
      className={`navbar-container ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="navbar">
        <div className="logo">
          <span className={`text ${isScrolled ? "text-black" : "text-white"}`}>
            fiverr
          </span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <MenuList isScrolled={isScrolled} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
