import React from "react";
import { Box } from "@mui/system";
import Card from "../Card/Card";
import "./List.css";

const List = ({ ideas }) => {
  return (
    <Box className="list-container">
      {ideas.map((idea, index) => {
        return (
          <Card
            title={idea.title}
            content={idea.content}
            likes={idea.upvotes}
            dislikes={idea.downvotes}
            tags={idea.tags}
            createdAt={idea.createdAt}
            key={index + 1}
          />
        );
      })}
    </Box>
  );
};

export default List;
