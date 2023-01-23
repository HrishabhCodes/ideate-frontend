import React, { useRef } from "react";
import { Box } from "@mui/system";
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";
import "./List.css";

const List = ({
  ideas,
  isLoading,
  page,
  setPage,
  totalIdeas,
  user,
  fetchAllIdeas,
}) => {
  const handleScroll = (e) => {
    try {
      const element = e.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        if (totalIdeas !== ideas.length) {
          setPage((prev) => prev + 1);
        }
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Box onScroll={handleScroll} className="list-container">
      {ideas.map((idea, index) => {
        return (
          <Card
            id={idea._id}
            title={idea.title}
            content={idea.content}
            likes={idea.upvotes}
            dislikes={idea.downvotes}
            tags={idea.tags}
            author={idea.author}
            createdAt={idea.createdAt}
            fetchAllIdeas={fetchAllIdeas}
            key={index + 1}
            user={user}
          />
        );
      })}
      {isLoading && <CardSkeleton cards={7} />}
      {page * 7 < totalIdeas ? <CardSkeleton cards={1} /> : null}
    </Box>
  );
};

export default List;
