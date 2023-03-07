import React from "react";
import { Link } from "react-router-dom";

const NavLinkItem = ({ menu, isScrolled }) => {
  const { title, url, icon } = menu;
  return (
    <div className="menu-item">
      {icon ? (
        <menu.icon className={`${isScrolled ? "text-black" : "text-white"}`} />
      ) : null}
      {menu.url ? (
        <Link to={url}>
          <span className={`${isScrolled ? "text-black" : "text-white"}`}>
            {title}
          </span>
        </Link>
      ) : (
        <span className={`${isScrolled ? "text-black" : "text-white"}`}>
          {title}
        </span>
      )}
    </div>
  );
};

export default NavLinkItem;
