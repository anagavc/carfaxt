import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <NavLink
      className="py-2 px-2 text-white font-heading font-medium hover:text-gray transition duration-300"
      to={{ pathname: props.to }}
      key={props.id}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;
