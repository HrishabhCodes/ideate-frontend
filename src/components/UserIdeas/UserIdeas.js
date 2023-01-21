import React from "react";
import { Box } from "@mui/material";
import "./UserIdeas.css";
import Idea from "./Idea";

const UserIdeas = () => {
  return (
    <Box className="container">
      <Box className="header">Your Ideas</Box>
      <Box className="ideas-list">
        <Idea />
        <Idea />
        <Idea />
        <Idea />
        <Idea />
      </Box>
    </Box>
  );
};

export default UserIdeas;
