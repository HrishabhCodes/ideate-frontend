import React, { useState } from "react";
import { Box } from "@mui/system";
import "./Card.css";
import { Typography } from "@mui/material";
import CardModal from "../CardModal/CardModal";

const idea =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iusto assumenda excepturi ut nesciunt dolorum doloribus voluptatem praesentium, voluptates eligendi praesentium, voluptates eligendi praesentium, voluptates eligendi Lorem ipsum dolor sit, ametconsectetur adipisicing elit. Nisi iusto assumenda excepturi utnesciunt dolorum doloribus voluptatem praesentium, voluptates eligendipraesentium, voluptates eligendi praesentium, voluptates eligendiLorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iustoassumenda excepturi ut nesciunt dolorum doloribus voluptatempraesentium, voluptates eligendi praesentium, voluptates eligendipraesentium, voluptates eligendi";

const Card = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="card">
      <Box onClick={handleOpen} className="card-content">
        <Box className="title">Doodlesy Project</Box>
        <Box className="author">Hrishabh Jain</Box>
        <Box className="idea">{idea}</Box>
      </Box>
      <CardModal idea={idea} open={open} handleClose={handleClose} />
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
