// IMPORT PAGE(S)
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
// IMPORT COMPONENT(S)
import Header from "./components/Header";
import Modal from "./components/Modal";

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faArrowDown,
  faCircle,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp, faArrowDown, faCircle, faMagnifyingGlass, faPlus);

function App() {
  // DECLARE STATE(S)
  const [token, setToken] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [whichModal, setWhichModal] = useState("");
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [togglePriceDesc, setTogglePriceDesc] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <Router>
      <div className={modalVisible ? "app no-scroll" : "app"}>
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
          togglePriceDesc={togglePriceDesc}
          setTogglePriceDesc={setTogglePriceDesc}
          setUserId={setUserId}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                priceMin={priceMin}
                priceMax={priceMax}
                togglePriceDesc={togglePriceDesc}
                setModalVisible={setModalVisible}
                setWhichModal={setWhichModal}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/payment" element={<Payment userId={userId} />} />
        </Routes>
        {modalVisible && (
          <Modal
            setModalVisible={setModalVisible}
            setWhichModal={setWhichModal}
            whichModal={whichModal}
            setToken={setToken}
            setUserId={setUserId}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
