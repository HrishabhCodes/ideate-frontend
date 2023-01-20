import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Box
      sx={{
        borderRadius: "0px 15px 15px 0px",
        width: 300,
        minWidth: 250,
        height: "100vh",
      }}
      className="sidebar"
    >
      <Box className="menu">
        <img className="logo" src="logo.png" alt="ideate" />

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
        <Typography className="user-name">Hrishabh Jain</Typography>
        <Button
          className="logout-btn"
          sx={{ bgcolor: "#1f75ff" }}
          variant="contained"
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
