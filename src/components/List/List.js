import React from "react";
import { Box } from "@mui/system";
import "./List.css";
import Card from "../Card/Card";

const List = () => {
  return (
    <Box className="list-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default List;
