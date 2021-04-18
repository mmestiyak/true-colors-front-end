import axios from "axios";

import React, { useState } from "react";

const AddService = () => {
  const [formInfo, setFormInfo] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const handleInputBlur = (e) => {
    const newFormInfo = { ...formInfo };
    newFormInfo[e.target.name] = e.target.value;
    setFormInfo(newFormInfo);
  };
  const handleFileUpload = (e) => {
    const files = e.target.files;
    const file = files[files.length - 1];
    setUploadedFile(file);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { title, description, price } = formInfo;
    const formData = new FormData();
    if (!uploadedFile)
      return alert(
        "Image is uploading! please wait a bit and hit submit button"
      );
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("serviceImage", uploadedFile);
    (async () => {
      try {
        await axios.post(
          "https://true-colorss.herokuapp.com/services",
          formData
        );
        alert("Service Added Successfully");
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        style={{ width: "90%" }}
        action=""
      >
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              required
              className="input"
              onBlur={handleInputBlur}
              type="text"
              name="title"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              onBlur={handleInputBlur}
              name="description"
              className="textarea is-small"
            ></textarea>
          </div>

          <div className="field my-3">
            <label className="label">Price</label>
            <div className="control">
              <input
                required
                className="input"
                onBlur={handleInputBlur}
                type="number"
                name="price"
              />
            </div>
          </div>
          <div className="file is-success my-5">
            <label className="file-label">
              <input
                className="file-input"
                onChange={handleFileUpload}
                accept="image/*"
                type="file"
                name="serviceImg"
                required
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Upload Image</span>
              </span>
            </label>
          </div>
        </div>

        <div className="control my-5">
          <button type="submit" className="button is-success ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
