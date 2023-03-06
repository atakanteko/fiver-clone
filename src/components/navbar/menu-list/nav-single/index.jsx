import React from "react";
import NavLinkItem from "../../../ui/nav-link-item/NavLinkItem";

const SingleNavItem = ({ menu }) => {
  return (
    <li>
      <NavLinkItem menu={menu} />
    </li>
  );
};

export default SingleNavItem;
