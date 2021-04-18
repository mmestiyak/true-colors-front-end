import axios from "axios";
import React, { useState } from "react";

const AddReview = () => {
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
    const { name, title, review } = formInfo;
    const formData = new FormData();
    if (!uploadedFile)
      return alert(
        "Image is uploading! please wait a bit and hit submit button"
      );
    formData.append("name", name);
    formData.append("title", title);
    formData.append("review", review);
    formData.append("file", uploadedFile);
    (async () => {
      try {
        await axios.post(
          "https://true-colorss.herokuapp.com/reviews",
          formData
        );
        alert("Thank you! Review Done!");
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
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  required
                  className="input"
                  onBlur={handleInputBlur}
                  type="text"
                  name="name"
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
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
          </div>
        </div>
        <div className="columns is-flex is-align-items-flex-end">
          <div className="column is-6">
            <label className="label">Review</label>
            <textarea
              required
              className="textarea is-small "
              placeholder="Write Review"
              name="review"
              onBlur={handleInputBlur}
            ></textarea>
          </div>
          <div className="column is-6">
            <div className="file is-success">
              <label className="file-label">
                <input
                  className="file-input"
                  onChange={handleFileUpload}
                  accept="image/*"
                  type="file"
                  name="file"
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
        </div>
        <div className="control">
          <button type="submit" className="button is-success is-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
