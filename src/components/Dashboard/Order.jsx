import React from "react";
import { useServices } from "../../contexts/ServicesContext";
import { arrayBufferToBase64, currencyFormatter } from "../../util";
import PaymentForm from "../common/PaymentForm";
const Order = ({ setCurrentComponent }) => {
  const { services, selectedServiceId } = useServices();
  if (selectedServiceId) {
    var service = services.find((s) => s._id === selectedServiceId);
    var { title, image, price } = service;
  }
  return (
    <>
      {service && (
        <div className="columns my-5 is-align-items-center">
          <div className="column is-5">
            <img
              style={{ width: "50%" }}
              alt={title}
              src={`data:image/png;base64, ${arrayBufferToBase64(
                image.img.data
              )}`}
            />
            <h3 className="is-size-4 my-5">
              {title} &mdash; {currencyFormatter(price)}
            </h3>
          </div>
          <div className="column is-7">
            <PaymentForm
              setCurrentComponent={setCurrentComponent}
              price={price}
              serviceName={title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
