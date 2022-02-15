import React from "react";
import NavItem from "./NavItem";
const MobileNav = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Rent",
      to: "/rent",
    },
  ];
  return (
    <div className="md:hidden flex w-full flex-col pl-6 py-6 bg-blue border border-blue-light transition-all ease-in top-80 duration-300 z-50">
      {links.map((link) => {
        return <NavItem to={link.to}>{link.name}</NavItem>;
      })}
    </div>
  );
};

export default MobileNav;
