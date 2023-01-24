import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CardModal from "../CardModal/CardModal";
import "./Card.css";
import axios from "axios";

const BASE_URL = "https://ideate.onrender.com";

const Card = ({
  title,
  content,
  likes,
  dislikes,
  tags,
  id,
  author,
  createdAt,
  fetchAllIdeas,
  user,
}) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [newLikes, setNewLikes] = useState(likes.length);
  const [newDislikes, setNewDislikes] = useState(dislikes.length);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (likes.includes(user._id)) {
      setLiked(true);
    } else if (dislikes.includes(user._id)) {
      setDisliked(true);
    }
  }, []);

  useEffect(() => {
    updateVotes();
  }, [newLikes, newDislikes]);

  const updateVotes = async () => {
    let data;
    if (liked && !disliked) {
      data = {
        liked: [user._id],
        disliked: [],
      };
    } else if (disliked && !liked) {
      data = {
        disliked: [user._id],
        liked: [],
      };
    } else {
      data = {
        disliked: [],
        liked: [],
      };
    }
    await axios.post(`${BASE_URL}/idea/${id}`, data);
  };

  const handleLike = (action) => {
    setLiked(action);
    if (!liked) {
      setNewLikes((prev) => prev + 1);
    } else {
      setNewLikes((prev) => prev - 1);
    }

    if (disliked) {
      setDisliked(!action);
      setNewDislikes((prev) => prev - 1);
    }
  };

  const handleDislike = (action) => {
    setDisliked(action);
    if (!disliked) {
      setNewDislikes((prev) => prev + 1);
    } else {
      setNewDislikes((prev) => prev - 1);
    }

    if (liked) {
      setLiked(!action);
      setNewLikes((prev) => prev - 1);
    }
  };

  return (
    <Box className="card">
      <Box onClick={handleOpen} className="card-content">
        <Box className="title">{title}</Box>
        <Box className="author">{author.name}</Box>
        <Box className="idea">{content}</Box>
      </Box>
      <CardModal
        title={title}
        content={content}
        tags={tags}
        author={author}
        createdAt={createdAt}
        open={open}
        handleClose={handleClose}
      />
      <Box className="votes">
        {liked ? (
          <Box onClick={() => handleLike(false)} className="liked">
            <i className="fa-solid fa-thumbs-up liked-icon"></i>
            <Typography className="text">{newLikes}</Typography>
          </Box>
        ) : (
          <Box onClick={() => handleLike(true)} className="likes">
            <i className="fa-solid fa-thumbs-up like-icon"></i>
            <Typography className="text">{newLikes}</Typography>
          </Box>
        )}

        {disliked ? (
          <Box onClick={() => handleDislike(false)} className="disliked">
            <i className="fa-solid fa-thumbs-down disliked-icon"></i>
            <Typography className="text">{newDislikes}</Typography>
          </Box>
        ) : (
          <Box onClick={() => handleDislike(true)} className="dislikes">
            <i className="fa-solid fa-thumbs-down dislike-icon"></i>
            <Typography className="text">{newDislikes}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
