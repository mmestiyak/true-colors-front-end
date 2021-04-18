import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useAuth } from "../contexts/AuthContext";
import UserLoggedIn from "./UserLoggedIn";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar is-transparent  is-spaced ">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to="/">
            True Colors
          </Link>
          <div
            className={`navbar-burger ${mobileMenu && `is-active`}`}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu  ${mobileMenu && `is-active`}`}
        >
          <div className="navbar-end">
            <HashLink className="navbar-item" smooth to="/#about">
              About
            </HashLink>
            <HashLink className="navbar-item" smooth to="/#services">
              Services
            </HashLink>

            <HashLink className="navbar-item" smooth to="/#testimonials">
              Testimonials
            </HashLink>
            <Link to="/dashboard" className="navbar-item">
              Dashboard
            </Link>
            {currentUser ? (
              <UserLoggedIn
                name={currentUser.displayName}
                image={currentUser.photoURL}
                logout={logout}
              />
            ) : (
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Link className="button is-primary" to="/login">
                    <span>Log in</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
