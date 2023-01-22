import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../../contexts/contextData";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cred, setCred] = useState({});
  const dataCtx = useContext(ContextData);

  const BASE_URL = "http://localhost:8080";

  const authHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email: cred.email,
          password: cred.password,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      const { token, userId } = response.data;

      if (userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dataCtx.setUserId(userId);
        dataCtx.setIsAuth(true);
      }
    } catch (error) {
      alert("Please check your username and password");
    }
  };

  return (
    <Box className="auth auth-page">
      <Box className="auth-content">
        <Box className="auth-header">Welcome back!</Box>
        <Box className="header-text">Please enter your details.</Box>
        <form className="form-container" onSubmit={authHandler}>
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
          <Box className="password-container">
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
          </Box>

          <input className="auth-btn" type="submit" value="Login" />
        </form>
        <p className="auth-text">
          Don&apos;t have an account?{" "}
          <span>
            <Link className="signup-link" to="/auth/signup">
              Sign Up!
            </Link>
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default Login;
