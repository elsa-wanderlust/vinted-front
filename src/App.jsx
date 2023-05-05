import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGE(S)
import Home from "./pages/home";
import Offer from "./pages/Offer";
// IMPORT COMPONENT(S)
import Header from "./components/Header";

function App() {
  // DECLARE STATE(S)
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="app">
        <Header setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
