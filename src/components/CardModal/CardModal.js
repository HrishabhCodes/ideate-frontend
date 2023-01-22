import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import "./CardModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
};

const CardModal = ({ open, handleClose, content, title, tags, createdAt }) => {
  let date = new Date(createdAt);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal">
        <Box className="title modal-title">{title}</Box>
        <Box className="author info">
          Hrishabh Jain<span style={{ color: "grey" }}> / </span>
          {date.toLocaleDateString().split("/").join("-")}
        </Box>
        <Box className="tags">
          {tags.map((tag, index) => {
            return (
              <Typography key={index + 1} className="tag">
                {tag}
              </Typography>
            );
          })}
        </Box>
        <Box className="idea-container">{content}</Box>
      </Box>
    </Modal>
  );
};

export default CardModal;
