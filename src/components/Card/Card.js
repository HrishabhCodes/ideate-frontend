import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CardModal from "../CardModal/CardModal";
import "./Card.css";

const Card = ({ title, content, likes, dislikes, tags, createdAt }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="card">
      <Box onClick={handleOpen} className="card-content">
        <Box className="title">{title}</Box>
        <Box className="author">Hrishabh Jain</Box>
        <Box className="idea">{content}</Box>
      </Box>
      <CardModal
        title={title}
        content={content}
        tags={tags}
        createdAt={createdAt}
        open={open}
        handleClose={handleClose}
      />
      <Box className="votes">
        <Box className="likes">
          <i className="fa-solid fa-thumbs-up like"></i>
          <Typography className="text">{likes}</Typography>
        </Box>
        <Box className="dislikes">
          <i className="fa-solid fa-thumbs-down dislike"></i>
          <Typography className="text">{dislikes}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
