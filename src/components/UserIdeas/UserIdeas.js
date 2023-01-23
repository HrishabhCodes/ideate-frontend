import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Idea from "./Idea";
import "./UserIdeas.css";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

const UserIdeas = () => {
  const [userIdeas, setUserIdeas] = useState([]);

  const fetchUserIdeas = async () => {
    const response = await axios.get(
      `${BASE_URL}/idea/user/${localStorage.getItem("userId")}`
    );

    const { ideas } = response.data;
    // console.log(response);
    setUserIdeas(ideas);
  };

  useEffect(() => {
    fetchUserIdeas();
  }, []);

  return (
    <Box className="container">
      <Box className="header">Your Ideas</Box>
      <Box className="ideas-list">
        {userIdeas ? (
          userIdeas.map((idea, index) => {
            return <Idea key={index} title={idea.title} />;
          })
        ) : (
          <Box className="no-idea">You haven't posted any idea yet!</Box>
        )}
      </Box>
    </Box>
  );
};

export default UserIdeas;
