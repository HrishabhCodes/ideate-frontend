import React from "react";
import { Box } from "@mui/material";
import IdeaForm from "../../components/IdeaForm/IdeaForm";
import "./Form.css";
import UserIdeas from "../../components/UserIdeas/UserIdeas";

const Form = () => {
  return (
    <Box className="form-page">
      <IdeaForm />
      <UserIdeas />
    </Box>
  );
};

export default Form;
