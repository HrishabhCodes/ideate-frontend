import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ContextData from "./contexts/contextData";
import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const { userId } = useContext(ContextData);
  const [user, setUser] = useState({});
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    const response = await axios.get(`${BASE_URL}/auth/${userId}`);
    const { user } = response.data;
    setUser(user[0]);
  };

  return (
    <div className="app">
      {userId ? (
        <Router>
          <Sidebar user={user} />
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/"
              element={<Home user={user} show={show} setShow={setShow} />}
            />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/auth/signup" replace />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
