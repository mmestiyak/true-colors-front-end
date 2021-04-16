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
        await axios.post("http://localhost:8888/reviews", formData);
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
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  required
                  class="input"
                  onBlur={handleInputBlur}
                  type="text"
                  name="name"
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
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
          </div>
        </div>
        <div className="columns is-flex is-align-items-flex-end">
          <div className="column is-6">
            <label class="label">Review</label>
            <textarea
              required
              class="textarea is-small "
              placeholder="Write Review"
              name="review"
              onBlur={handleInputBlur}
            ></textarea>
          </div>
          <div className="column is-6">
            <div class="file is-success">
              <label class="file-label">
                <input
                  class="file-input"
                  onChange={handleFileUpload}
                  accept="image/*"
                  type="file"
                  name="file"
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
        </div>
        <div class="control">
          <button type="submit" class="button is-success is-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
