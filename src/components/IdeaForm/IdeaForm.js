import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import "./IdeaForm.css";

const BASE_URL = "http://localhost:8080";

const IdeaForm = () => {
  const [mode, setMode] = useState("add");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = () => {
    const data = {
      title: title,
      content: content,
      tags: tags.split(",").map((tag) => {
        return tag.trim();
      }),
    };
    if (mode === "add") {
      axios
        .post(`${BASE_URL}/idea/create`, data)
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
    }

    setTitle("");
    setTags("");
    setContent("");
  };

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Comma separated tags (Max 5)"
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </Box>
        <Button
          className="submit-btn"
          sx={{ bgcolor: "#1f75ff" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default IdeaForm;
