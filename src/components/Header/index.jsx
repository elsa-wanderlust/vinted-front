import "./header.css";
import logo from "../../assets/img/vinted-logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENT(S)
import FilterOffers from "../FilterOffers";

const Header = ({
  modalVisible,
  setModalVisible,
  setWhichModal,
  setToken,
  search,
  setSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  togglePriceDesc,
  setTogglePriceDesc,
}) => {
  // DECLARE VARIABLE(S)
  const navigate = useNavigate();
  const token = Cookies.get("tokenVinted");

  return (
    <header>
      <div className="header container">
        <section className="logo">
          <img src={logo} alt="vinted logo written in green italic" />
        </section>
        <FilterOffers
          search={search}
          setSearch={setSearch}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          togglePriceDesc={togglePriceDesc}
          setTogglePriceDesc={setTogglePriceDesc}
        />
        <section className="header-buttons">
          <div>
            {!token ? (
              <div className="signup-login-buttons">
                <button
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    setWhichModal("signup");
                  }}
                >
                  S'inscrire
                </button>
                <button
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    setWhichModal("login");
                  }}
                >
                  Se connecter
                </button>
              </div>
            ) : (
              <div className="disconnect-button">
                <button
                  onClick={() => {
                    Cookies.remove("tokenVinted");
                    setToken("");
                  }}
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
          <div className="header-sell-articles">
            <button
              onClick={() => {
                if (token) {
                  navigate("/publish");
                } else {
                  setModalVisible(true);
                  setWhichModal("login");
                }
              }}
            >
              Vends tes articles
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
