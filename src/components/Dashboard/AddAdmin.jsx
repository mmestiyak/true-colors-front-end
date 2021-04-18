import axios from "axios";
import React from "react";

const AddAdmin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = e.currentTarget.email.value;
    // if (!validateEmail(email)) return alert("Add a valid email address");

    (async () => {
      try {
        await axios.post("https://true-colorss.herokuapp.com/admins", {
          email,
        });
        alert("Admin Added");
        form.reset();
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      action=""
    >
      <div className="columns my-5">
        <div className="column-6">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="email"
                required
                name="email"
                placeholder="Admin Email"
              />
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-success">
                Add
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddAdmin;
