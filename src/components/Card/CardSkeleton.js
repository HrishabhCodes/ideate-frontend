import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return (
    <>
      {cards > 0 &&
        Array(cards)
          .fill(0)
          .map((_, i) => {
            return (
              <Box key={i} className="card">
                <Box className="card-content">
                  <Box className="title">
                    <Skeleton />
                  </Box>
                  <Box className="author">
                    <Skeleton />
                  </Box>
                  <Box className="idea">
                    <Skeleton />
                    <Skeleton />
                  </Box>
                </Box>
                <Box className="votes">
                  <Box className="likes">
                    <i className="skeleton fa-solid fa-thumbs-up like"></i>
                    <Typography className="text">
                      <Skeleton />
                    </Typography>
                  </Box>
                  <Box className="dislikes">
                    <i className="skeleton fa-solid fa-thumbs-down dislike"></i>
                    <Typography className="text">
                      <Skeleton />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
    </>
  );
};

export default CardSkeleton;
