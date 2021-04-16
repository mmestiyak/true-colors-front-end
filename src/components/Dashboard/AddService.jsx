import axios from "axios";

import React, { useState } from "react";
import { useServices } from "../../contexts/ServicesContext";

const AddService = () => {
  const { setServicesUpdated } = useServices();
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
    const { title, description } = formInfo;
    const formData = new FormData();
    if (!uploadedFile)
      return alert(
        "Image is uploading! please wait a bit and hit submit button"
      );
    formData.append("title", title);
    formData.append("description", description);
    formData.append("serviceImage", uploadedFile);
    (async () => {
      try {
        await axios.post("http://localhost:8888/services", formData);
        alert("Service Added Successfully");
        setServicesUpdated("updated from add service");
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
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              required
              class="input"
              onBlur={handleInputBlur}
              type="text"
              name="title"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              onBlur={handleInputBlur}
              name="description"
              class="textarea is-small"
            ></textarea>
          </div>

          <div class="file is-success my-5">
            <label class="file-label">
              <input
                class="file-input"
                onChange={handleFileUpload}
                accept="image/*"
                type="file"
                name="serviceImg"
                required
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Upload Image</span>
              </span>
            </label>
          </div>
        </div>

        <div class="control my-5">
          <button type="submit" class="button is-success ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
