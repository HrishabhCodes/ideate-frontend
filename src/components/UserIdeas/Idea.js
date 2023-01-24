import { Box } from "@mui/material";
import React from "react";
import axios from "axios";
import "./UserIdeas.css";

const BASE_URL = "https://ideate.onrender.com";

const Idea = ({ title, _id, fetchUserIdeas }) => {
  const handleDelete = async () => {
    await axios.delete(`${BASE_URL}/idea/${_id}`);
    fetchUserIdeas();
  };

  return (
    <Box className="idea-card">
      <Box className="form-card">
        <Box className="title">{title}</Box>
      </Box>
      <Box className="options">
        <Box className="delete">
          <i onClick={handleDelete} className="fa-solid fa-trash"></i>
        </Box>
      </Box>
    </Box>
  );
};

export default Idea;
