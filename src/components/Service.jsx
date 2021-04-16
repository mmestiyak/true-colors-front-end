import React from "react";
import { arrayBufferToBase64 } from "../util";
const Service = ({ title, description, image }) => {
  return (
    <div
      style={{ height: "100%" }}
      className="column is-one-third

"
    >
      <div className="card is-flex  is-flex-direction-column is-align-items-center p-5">
        <div className="card-image ">
          <figure
            className="image is-128x128	
"
          >
            <img
              alt={title}
              src={`data:image/png;base64, ${arrayBufferToBase64(
                image.img.data
              )}`}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3 className="has-text-centered title">{title}</h3>
            <p className="has-text-centered">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
