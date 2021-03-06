import React from "react";
const About = () => {
  return (
    <div
      id="about"
      className="section is-medium is-flex is-justify-content-center"
    >
      <div className="columns is-desktop is-justify-content-center">
        <div className="column is-5">
          <div className="card is-shadowless " style={{ height: "100%" }}>
            <div className="card-image">
              <figure className="image ">
                <img src="https://i.ibb.co/hWWy854/about-img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-5">
          <div className="card about-card" style={{ height: "100%" }}>
            <div className="card-content">
              <div className="content">
                <h3 className={`is-size-4  has-text-primary	`}>ABOUT US</h3>
                <h3 className="is-size-1 mtn-1">Who We Are</h3>
                <p className="has-text-justified">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis…
                </p>
                <button className="button is-primary ">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
