import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavItem = ({ text, icon, setCurrentComponent }) => {
  return (
    <Link
      className="sidebar-nav-link"
      onClick={() => {
        setCurrentComponent(text);
      }}
    >
      <span className="icon-text  my-5">
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{text}</span>
      </span>
    </Link>
  );
};

export default NavItem;
