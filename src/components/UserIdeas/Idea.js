import { Box } from "@mui/material";
import React from "react";
import "./UserIdeas.css";

const Idea = ({ title }) => {
  return (
    <Box className="idea-card">
      <Box className="form-card">
        <Box className="title">{title}</Box>
      </Box>
      <Box className="options">
        <Box className="edit">
          <i className="fa-solid fa-pen-to-square"></i>
        </Box>
        <Box className="delete">
          <i className="fa-solid fa-trash"></i>
        </Box>
      </Box>
    </Box>
  );
};

export default Idea;
