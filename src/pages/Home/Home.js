import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";
import "./Home.css";

const BASE_URL = "https://ideate.onrender.com";
let totalIdeas;

const Home = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [allIdeas, setAllIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchAllIdeas();
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
      <Search
        allIdeas={allIdeas}
        filtered={filtered}
        setFiltered={setFiltered}
        search={search}
        setSearch={setSearch}
      />
      <List
        page={page}
        setPage={setPage}
        totalIdeas={totalIdeas}
        fetchAllIdeas={fetchAllIdeas}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        ideas={filtered.length > 0 ? filtered : allIdeas}
        user={user}
      />
    </Box>
  );
};

export default Home;
