import React from "react";

const UserLoggedIn = ({ name, image, logout }) => {
  const handleLogOut = () => {
    (async () => {
      await logout();
    })();
  };
  return (
    <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
      <a className="navbar-link is-arrowless">
        {/* <div className="is-user-avatar">
          <img src={image} alt={name} className="p-2 navbar-img" />
        </div> */}
        <div className="is-user-name">
          <span>{name}</span>
        </div>
        <span className="icon">
          <i className="mdi mdi-chevron-down"></i>
        </span>
      </a>
      <div className="navbar-dropdown">
        <a className="navbar-item is-active">
          <span className="icon">
            <i className="mdi mdi-account"></i>
          </span>
          <span>My Profile</span>
        </a>

        <hr className="navbar-divider" />
        <a className="navbar-item" onClick={handleLogOut}>
          <span className="icon">
            <i className="mdi mdi-logout"></i>
          </span>
          <span>Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default UserLoggedIn;
