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
          <div className="column is-6">
            <p className="title">Welcome to True Colors</p>
            <p className="subtitle mt-3">
              Dolore commodo ea excepteur, do irure praetermissum aut enim
              proident aut laboris, an lorem irure irure commodo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
