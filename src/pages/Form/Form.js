import React, { useContext, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import IdeaForm from "../../components/IdeaForm/IdeaForm";
import UserIdeas from "../../components/UserIdeas/UserIdeas";
import ContextData from "../../contexts/contextData";
import "./Form.css";

const BASE_URL = "http://localhost:8080";

const Form = () => {
  const { userId } = useContext(ContextData);
  const [userIdeas, setUserIdeas] = useState([]);

  const fetchUserIdeas = async () => {
    const response = await axios.get(`${BASE_URL}/idea/user/${userId}`);
    const { ideas } = response.data;
    setUserIdeas([...ideas]);
  };

  return (
    <Box className="form-page">
      <IdeaForm fetchUserIdeas={fetchUserIdeas} />
      <UserIdeas fetchUserIdeas={fetchUserIdeas} userIdeas={userIdeas} />
    </Box>
  );
};

export default Form;
