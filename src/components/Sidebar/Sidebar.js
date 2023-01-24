import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextData from "../../contexts/contextData";
import windowDimensions from "../../hooks/windowDim";
import "./Sidebar.css";

const Sidebar = ({ user }) => {
  const { setUserId } = useContext(ContextData);
  const { width } = windowDimensions();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUserId("");
  };

  return (
    <>
      <Box className="sidebar">
        <Box className="menu">
          {width <= 900 ? (
            <img
              className="ideate-mobile-logo"
              src="mobile-logo.png"
              alt="ideate"
            />
          ) : (
            <img className="ideate-logo" src="logo.png" alt="ideate" />
          )}

          <NavLink to="" className="item home">
            <Box className="icon">
              <i className="fa-solid fa-house"></i>
            </Box>
            <Typography className="text">Home</Typography>
          </NavLink>

          <NavLink to="form" className="item form">
            <Box className="icon">
              <i className="fa-solid fa-rectangle-list"></i>
            </Box>
            <Typography className="text">Form</Typography>
          </NavLink>
        </Box>

        <Box className="profile">
          <Typography className="text user-name">{user.name}</Typography>
          {width <= 900 ? (
            <i
              onClick={logout}
              className="mobile-logout fa-solid fa-power-off"
            ></i>
          ) : (
            <Button
              onClick={logout}
              className="logout-btn"
              sx={{ bgcolor: "#1f75ff" }}
              variant="contained"
            >
              Sign Out
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
