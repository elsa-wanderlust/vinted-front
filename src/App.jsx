import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// IMPORT COMPONENTS
import Header from "./components/Header";

function App() {
  // SET STATE
  const [token, setToken] = useState("");
  return (
    <Router>
      <div className="app">
        <Header setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<SignUp setToken={setToken} />} />
          <Route path="/user/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
