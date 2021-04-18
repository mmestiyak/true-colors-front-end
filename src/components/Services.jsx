import axios from "axios";
import React, { useState, useEffect } from "react";
import { useServices } from "../contexts/ServicesContext";
import Loading from "./common/Loading";
import Service from "./Service";

const Services = () => {
  const { services } = useServices();
  return (
    <div id="services" className="section is-medium">
      <h2 className="title mb-6 has-text-centered is-uppercase	has-text-left-mobile	">
        our <span className="has-text-primary">services</span>
      </h2>
      {services ? (
        <div className="container">
          <div className="columns is-variable is-6 is-flex-wrap-wrap">
            {services.map((service) => (
              <Service
                key={service._id}
                title={service.title}
                description={service.description}
                image={service.image}
                id={service._id}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Services;
