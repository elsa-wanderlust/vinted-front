import "./header.css";
import logo from "../../assets/img/vinted-logo.png";
// import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import { useState } from "react";

// IMPORT COMPONENT(S)
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const Header = ({ modalVisible, setModalVisible, setToken }) => {
  const cookie = Cookies.get("tokenVinted");

  // DECLARE STATE(S)
  // const [modalSignup, setModalSignup] = useState(false);
  // const [modalLogin, setModalLogin] = useState(false);

  return (
    <header>
      <div className="header container">
        <section className="logo">
          <img src={logo} alt="vinted logo written in green italic" />
        </section>
        <section className="search-field">
          <form>
            <input
              type="text"
              name="searchField"
              placeholder="Recherche des articles"
            />
          </form>
        </section>
        <section>
          <div className="buttons">
            {!cookie ? (
              <div>
                <button
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    // const modalVisibleCopy = { ...modalVisible };
                    // modalVisibleCopy.signup = true;
                    // setModalVisible(modalVisibleCopy);
                    // setModalSignup(true);
                  }}
                >
                  S'inscrire
                </button>
                <button
                  onClick={() => {
                    // setModalVisible(true);
                  }}
                >
                  Se connecter
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  // Cookies.remove("tokenVinted");
                  // setToken("");
                }}
              >
                Se déconnecter
              </button>
            )}
          </div>
        </section>
        {/* <>
          {modalSignup && (
            <SignUpForm setToken={setToken} setModalSignup={setModalSignup} />
          )}
          {modalLogin && (
            <LoginForm setToken={setToken} setModalLogin={setModalLogin} />
          )}
        </> */}

        {/* <div className="buttons">
          {!cookie ? (
            <div>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/user/login">
                <button>Se connecter</button>
              </Link>{" "}
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

        <button>Vends tes articles</button> */}
      </div>
    </header>
  );
};

export default Header;
