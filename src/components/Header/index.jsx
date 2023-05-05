import "./header.css";
import logo from "../../assets/img/vinted-logo.png";
import Cookies from "js-cookie";

// IMPORT COMPONENT(S)
import FilterArticle from "../FilterArticles";

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
}) => {
  const cookie = Cookies.get("tokenVinted");

  return (
    <header>
      <div className="header container">
        <section className="logo">
          <img src={logo} alt="vinted logo written in green italic" />
        </section>
        <FilterArticle
          search={search}
          setSearch={setSearch}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
        />
        <section>
          <div className="buttons">
            {!cookie ? (
              <div>
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
              <button
                onClick={() => {
                  Cookies.remove("tokenVinted");
                  setToken("");
                }}
              >
                Se déconnecter
              </button>
            )}
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
