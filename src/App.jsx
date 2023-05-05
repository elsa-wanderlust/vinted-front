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
  const [whichModal, setWhichModal] = useState("");
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <Router>
      <div className="app">
        <Header
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setWhichModal={setWhichModal}
          setToken={setToken}
          search={search}
          setSearch={setSearch}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} priceMin={priceMin} priceMax={priceMax} />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
        {modalVisible && (
          <Modal
            setModalVisible={setModalVisible}
            whichModal={whichModal}
            setToken={setToken}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
