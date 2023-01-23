import React from "react";
import { Box } from "@mui/system";
import "./Search.css";

const Search = ({ filtered, allIdeas, setFiltered, search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(allIdeas);
    const searchedData = allIdeas.filter((idea) => {
      return idea.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFiltered([...searchedData]);
  };

  return (
    <Box className="search">
      <Box className="search-bar">
        <Box className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Box>
        <input
          placeholder="Search ideas..."
          className="search-input"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </Box>
    </Box>
  );
};

export default Search;
