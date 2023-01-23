import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Idea from "./Idea";
import "./UserIdeas.css";

const UserIdeas = ({ fetchUserIdeas, userIdeas }) => {
  useEffect(() => {
    fetchUserIdeas();
  }, []);

  return (
    <Box className="container">
      <Box className="header">Your Ideas</Box>
      <Box className="ideas-list">
        {userIdeas.length > 0 ? (
          userIdeas.map((idea, index) => {
            return (
              <Idea
                fetchUserIdeas={fetchUserIdeas}
                key={index}
                title={idea.title}
                _id={idea._id}
              />
            );
          })
        ) : (
          <Box className="no-idea">You haven't posted any idea yet!</Box>
        )}
      </Box>
    </Box>
  );
};

export default UserIdeas;
