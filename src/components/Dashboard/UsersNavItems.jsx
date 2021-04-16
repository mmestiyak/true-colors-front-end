import React from "react";
// icons
import {
  faCartPlus,
  faListUl,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const navItems = [
  {
    text: "Order",
    icon: faCartPlus,
  },
  {
    text: "Orders List",
    icon: faListUl,
  },
  {
    text: "Add Review",
    icon: faPlus,
  },
];
const UsersNavItems = ({ setCurrentComponent }) => {
  return (
    <>
      {navItems.map((item) => (
        <NavItem
          icon={item.icon}
          setCurrentComponent={setCurrentComponent}
          text={item.text}
        />
      ))}
    </>
  );
};

export default UsersNavItems;
