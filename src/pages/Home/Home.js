import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import "./Home.css";

const BASE_URL = "http://localhost:8080";

const Home = () => {
  const [allIdeas, setAllIdeas] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchAllIdeas = async () => {
    const res = await axios.get(`${BASE_URL}/idea/all`);
    const data = res.data;
    setAllIdeas([...data.ideas]);
  };

  useEffect(() => {
    fetchAllIdeas();
  }, []);

  return (
    <Box className="home-page">
      <Search />
      <List ideas={allIdeas} />
    </Box>
  );
};

export default Home;
