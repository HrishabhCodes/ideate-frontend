import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";

let user = false;

function App() {
  return (
    <div className="app">
      {user ? (
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
