import React from "react";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <section className="hero hero-main p-4 is-fullheight-with-navbar">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="columns">
          <div className="column ">
            <p className="title">Welcome to True Colors</p>
            <p className="subtitle mt-3">
              New Color – New Adventures – New Memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
