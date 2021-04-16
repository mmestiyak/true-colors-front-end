import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserLoggedIn from "./UserLoggedIn";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <>
      <nav className="navbar is-transparent  is-spaced ">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to="/">
            True Colors
          </Link>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/services" className="navbar-item">
              Services
            </Link>
            <Link to="/About" className="navbar-item">
              Testimonials
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
