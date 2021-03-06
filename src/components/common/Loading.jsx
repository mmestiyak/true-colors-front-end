import loadingIcon from "../../images/loading.svg";
import React from "react";

const Loading = ({ isFull }) => {
  return (
    <div
      className={`is-flex is-justify-content-center p-5  ${
        isFull && `loading-full-page`
      }`}
    >
      <img style={{ width: "8rem" }} src={loadingIcon} alt="" />
    </div>
  );
};

export default Loading;
