import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useServices } from "../contexts/ServicesContext";
import { arrayBufferToBase64 } from "../util";
import { useAuth } from "../contexts/AuthContext";
const Service = ({ title, description, image, id }) => {
  const { setSelectedServiceId } = useServices();
  const history = useHistory();
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "https://true-colorss.herokuapp.com/admins/checkIsAdmin",
          { email: currentUser.email }
        );
        setIsAdmin(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div
      onClick={() => {
        if (!isAdmin) {
          setSelectedServiceId(id);
          history.push("/dashboard");
        }
      }}
      className="column is-one-third is-clickable	
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
