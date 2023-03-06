import React from "react";

const NavLinkItem = ({ menu }) => {
  return (
    <div className="menu-item">
      {menu.icon ? <menu.icon /> : null}
      {menu.url ? (
        <a href={menu.url}>{menu.title}</a>
      ) : (
        <span>{menu.title}</span>
      )}
    </div>
  );
};

export default NavLinkItem;
