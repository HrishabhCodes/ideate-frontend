import React from "react";
import { Box } from "@mui/system";
import "./Card.css";
import { Typography } from "@mui/material";

const Card = () => {
  return (
    <Box className="card">
      <Box className="card-content">
        <Box className="title">Doodlesy Project</Box>
        <Box className="date">
          <span className="author">Hrishabh Jain</span>{" "}
          <span style={{ color: "grey" }}>/</span>{" "}
          <span className="date">12-10-2023</span>
        </Box>
        <Box className="idea">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iusto
          assumenda excepturi ut nesciunt dolorum doloribus voluptatem
          praesentium, voluptates eligendi praesentium, voluptates eligendi
          praesentium, voluptates eligendi Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nisi iusto assumenda excepturi ut
          nesciunt dolorum doloribus voluptatem praesentium, voluptates eligendi
          praesentium, voluptates eligendi praesentium, voluptates eligendi
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iusto
          assumenda excepturi ut nesciunt dolorum doloribus voluptatem
          praesentium, voluptates eligendi praesentium, voluptates eligendi
          praesentium, voluptates eligendi
        </Box>
      </Box>
      <Box className="votes">
        <Box className="likes">
          <i className="fa-solid fa-thumbs-up like"></i>
          <Typography className="text">14</Typography>
        </Box>
        <Box className="dislikes">
          <i className="fa-solid fa-thumbs-down dislike"></i>
          <Typography className="text">0</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
