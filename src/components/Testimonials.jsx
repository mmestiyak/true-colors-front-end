import axios from "axios";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { arrayBufferToBase64 } from "../util";
import Loading from "./common/Loading";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://true-colorss.herokuapp.com/reviews"
        );
        await setTestimonials(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <section
        id="testimonials"
        className="section section-testimonials is-large"
      >
        <h2 className="title mb-6 has-text-centered is-uppercase	has-text-left-mobile	">
          What our <span className="has-text-primary">clients</span> says
        </h2>
        {testimonials ? (
          <div className="columns is-flex is-justify-content-center">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={20000}
              className="column is-6"
            >
              {testimonials.map(({ name, title, review, image }) => (
                <div>
                  <img
                    alt=""
                    src={`data:image/png;base64, ${arrayBufferToBase64(
                      image.img.data
                    )}`}
                  />
                  <div className="myCarousel">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <p>{review}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default Testimonials;
