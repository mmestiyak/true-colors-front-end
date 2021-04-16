import React from "react";
// icons
import {
  faCartPlus,
  faListUl,
  faPlus,
  faTasks,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const navItems = [
  {
    text: "Orders List",
    icon: faListUl,
  },
  {
    text: "Manage Services",
    icon: faTasks,
  },
  {
    text: "Add Service",
    icon: faPlus,
  },
  {
    text: "Add Admin",
    icon: faUserPlus,
  },
];
const AdminNavItems = ({ setCurrentComponent }) => {
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

export default AdminNavItems;
