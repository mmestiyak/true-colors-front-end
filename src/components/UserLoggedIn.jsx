import React from "react";

const UserLoggedIn = ({ name, image, logout }) => {
  const handleLogOut = () => {
    (async () => {
      await logout();
    })();
  };
  return (
    <div class="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
      <a class="navbar-link is-arrowless">
        {/* <div class="is-user-avatar">
          <img src={image} alt={name} className="p-2 navbar-img" />
        </div> */}
        <div class="is-user-name">
          <span>{name}</span>
        </div>
        <span class="icon">
          <i class="mdi mdi-chevron-down"></i>
        </span>
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item is-active">
          <span class="icon">
            <i class="mdi mdi-account"></i>
          </span>
          <span>My Profile</span>
        </a>

        <hr class="navbar-divider" />
        <a class="navbar-item" onClick={handleLogOut}>
          <span class="icon">
            <i class="mdi mdi-logout"></i>
          </span>
          <span>Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default UserLoggedIn;
