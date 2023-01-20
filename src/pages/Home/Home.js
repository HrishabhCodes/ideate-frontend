import React from "react";
import { Box } from "@mui/material";
import "./Home.css";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";

const Home = () => {
  return (
    <Box className="home-page">
      <Search />
      <List />
    </Box>
  );
};

export default Home;
