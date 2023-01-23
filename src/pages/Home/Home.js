import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import "./Home.css";

const BASE_URL = "http://localhost:8080";
let totalIdeas;

const Home = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [allIdeas, setAllIdeas] = useState([]);
  // const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchAllIdeas();
    }, 500);
  }, [page]);

  const fetchAllIdeas = async () => {
    const res = await axios.get(`${BASE_URL}/idea/all?page=${page}`);
    const data = res.data;
    totalIdeas = data.totalIdeas;
    setIsLoading(false);
    setAllIdeas((prev) => [...prev, ...data.ideas]);
  };

  return (
    <Box className="home-page">
      <Search />
      <List
        page={page}
        setPage={setPage}
        totalIdeas={totalIdeas}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        ideas={allIdeas}
        user={user}
      />
    </Box>
  );
};

export default Home;
