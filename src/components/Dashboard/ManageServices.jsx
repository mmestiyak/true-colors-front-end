import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useServices } from "../../contexts/ServicesContext";
import { arrayBufferToBase64 } from "../../util";
import Loading from "../common/Loading";

const ManageServices = () => {
  const { services, setServicesUpdated } = useServices();
  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:8888/services", {
        data: {
          id: id,
        },
      });
      setServicesUpdated((prevState) => !prevState);
      alert("Service Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {services ? (
        <table
          class="table table is-fullwidth
   "
        >
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(({ title, _id: id, image }) => (
              <tr key={id}>
                <th>{title}</th>
                <td>
                  <img
                    style={{ width: "5rem", borderRadius: ".3em" }}
                    src={`data:image/png;base64, ${arrayBufferToBase64(
                      image.img.data
                    )}`}
                    alt=""
                  />
                </td>
                <td>
                  <span
                    onClick={() => {
                      handleDelete(id);
                    }}
                    class="icon is-clickable has-text-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                  <span class="icon  px-5 is-clickable has-text-success">
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ManageServices;
