import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"; // to be able to send request
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";

function App() {
  // STATES VARIABLES
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(serverResponse.data);
        setisLoading(false);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <p>la page est en cours de chargement ... </p>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
