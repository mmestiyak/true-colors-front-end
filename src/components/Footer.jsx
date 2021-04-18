import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div className="columns">
        <div className="column">
          <div class="content has-text-centered">
            <p class="has-text-danger">
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
