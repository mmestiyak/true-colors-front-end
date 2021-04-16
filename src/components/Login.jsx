import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const handleClick = () => {
    (async () => {
      await login();
    })();
  };
  return (
    <div>
      <div className="section is-flex is-flex-direction-column is-align-items-center">
        <img src="https://img.icons8.com/bubbles/200/000000/google-logo.png" />
        <button
          onClick={handleClick}
          className="button is-primary is-large mt-5"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
