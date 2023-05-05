import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGE(S)
import Home from "./pages/home";
import Offer from "./pages/Offer";
// IMPORT COMPONENT(S)
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  // DECLARE STATE(S)
  const [token, setToken] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setToken={setToken}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
        {modalVisible && (
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setToken={setToken}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
