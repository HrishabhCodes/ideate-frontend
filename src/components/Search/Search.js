import React from "react";
import { Box } from "@mui/system";
import "./Search.css";

const Search = () => {
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
        />
      </Box>
    </Box>
  );
};

export default Search;
