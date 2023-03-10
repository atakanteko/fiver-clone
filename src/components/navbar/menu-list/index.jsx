/* eslint-disable indent */
import React from "react";
import { menuItems } from "../../../menu-items";
import SingleNavItem from "./nav-single";
import MultiNavItem from "./nav-multi";

const MenuList = ({ isScrolled }) => {
  const items = menuItems.items.map((menu) => {
    switch (menu.type) {
      case "single":
        return (
          <SingleNavItem key={menu.id} menu={menu} isScrolled={isScrolled} />
        );
      case "multi":
        return (
          <MultiNavItem key={menu.id} menu={menu} isScrolled={isScrolled} />
        );
      default:
        break;
    }
  });
  return (
    <nav>
      <ul>{items}</ul>
    </nav>
  );
};

export default MenuList;
