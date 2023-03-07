import React from "react";
import NavLinkItem from "../../../ui/nav-link-item/NavLinkItem";

const SingleNavItem = ({ menu, isScrolled }) => {
  return (
    <li>
      <NavLinkItem menu={menu} isScrolled={isScrolled} />
    </li>
  );
};

export default SingleNavItem;
