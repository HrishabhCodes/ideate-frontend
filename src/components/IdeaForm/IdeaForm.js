import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import ContextData from "../../contexts/contextData";
import "./IdeaForm.css";

const BASE_URL = "http://localhost:8080";

const IdeaForm = ({ fetchUserIdeas }) => {
  const { userId } = useContext(ContextData);
  const [mode, setMode] = useState("add");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(`${BASE_URL}/auth/${userId}`);
    const userData = response.data;

    const data = {
      title: title,
      content: content,
      tags: tags.split(",").map((tag) => {
        return tag.trim();
      }),
      user: {
        name: userData.user[0].name,
        id: userData.user[0]._id,
      },
    };

    if (mode === "add") {
      await axios
        .post(`${BASE_URL}/idea/create`, data)
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
    }
    fetchUserIdeas();
    setTitle("");
    setTags("");
    setContent("");
  };

  return (
    <Box className="form-container">
      <form onSubmit={handleSubmit}>
        <Box className="wrapper">
          <Box className="title-container">
            <label className="title-label" htmlFor="title">
              Title
            </label>
            <br />
            <input
              required
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
              placeholder="Comma separated tags"
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
            required
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
          type="submit"
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default IdeaForm;
