import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column">
          <div className="content has-text-centered">
            <p className="has-text-danger">
              All Right Reserved {new Date().getFullYear()} | Created with 💛 by
              <a
                href="https://facebook.com/mmestiyak"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                mmestiyak
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
