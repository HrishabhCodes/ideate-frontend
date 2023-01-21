import React from "react";
import { Box, Button } from "@mui/material";
import "./IdeaForm.css";

const IdeaForm = () => {
  return (
    <Box className="form-container">
      <form>
        <Box className="wrapper">
          <Box className="title-container">
            <label className="title-label" htmlFor="title">
              Title
            </label>
            <br />
            <input
              placeholder="Title"
              name="title"
              type="text"
              className="title-input"
            />
          </Box>
          <Box className="tags-container">
            <label className="tags-label" htmlFor="tags">
              Tags
            </label>
            <br />
            <input
              name="tags"
              type="text"
              placeholder="Tags (comma separated)"
              className="tags-input"
            />
          </Box>
        </Box>
        <Box className="content-container">
          <label className="content-label" htmlFor="content">
            Idea
          </label>
          <br />
          <textarea
            name="content"
            className="content-input"
            placeholder="Write your idea here..."
          ></textarea>
        </Box>
        <Button
          className="submit-btn"
          sx={{ bgcolor: "#1f75ff" }}
          variant="contained"
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default IdeaForm;
