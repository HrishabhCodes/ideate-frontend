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
import { useContext } from "react";
import "./App.css";

function App() {
  const { isAuth } = useContext(ContextData);

  // useEffect(() => {
  //   console.log(isAuth);
  //   console.log(userId);
  // }, [isAuth, userId]);

  // useEffect(() => {
  //   console.log(isAuth);
  //   console.log(userId);
  // }, [isAuth, userId]);

  return (
    <div className="app">
      {isAuth ? (
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
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
