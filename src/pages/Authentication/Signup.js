import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../../styles/Signup.module.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cred, setCred] = useState({});
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(cred);

    try {
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POSt",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cred.username,
          email: cred.email,
          password: cred.password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth auth-page">
      <div className="auth-content">
        <div className="auth-header">Create your account</div>
        <div className="header-text">Please enter your details.</div>
        <form className="form-container" onSubmit={authHandler}>
          <label className="labels" htmlFor="username">
            Name
          </label>
          <br />
          <input
            required
            className="username input"
            name="username"
            type="text"
            onChange={(e) => setCred({ ...cred, username: e.target.value })}
          />

          <label className="labels" htmlFor="email">
            Email address
          </label>
          <br />
          <input
            required
            className="email input"
            name="email"
            type="email"
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <br />

          <label className="labels" htmlFor="password">
            Password
          </label>
          <br />
          <div className="password-container">
            <input
              required
              className="password input"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
            />
            {!showPassword ? (
              <i
                onClick={() => setShowPassword((prev) => !prev)}
                className="show fa-solid fa-eye-slash"
              ></i>
            ) : (
              <i
                onClick={() => setShowPassword((prev) => !prev)}
                className="show fa-solid fa-eye"
              ></i>
            )}
          </div>

          <input className="auth-btn" type="submit" value="signup" />
        </form>
        <p className="auth-text">
          Already have an account?{" "}
          <span>
            <Link className="login-link" to="/auth/login">
              Log In!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
