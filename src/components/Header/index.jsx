import "./header.css";
import logo from "../../assets/img/vinted-logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setToken }) => {
  const cookie = Cookies.get("tokenVinted");
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="vinted written in italic" />
      </div>
      <div className="search-field">
        <form>
          <input
            type="text"
            name="searchField"
            placeholder="Recherche des articles"
          />
        </form>
      </div>
      <div className="buttons">
        <div>
          <Link className={cookie ? "hidden" : ""} to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link className={cookie ? "hidden" : ""} to="/user/login">
            <button>Se connecter</button>
          </Link>
          <button
            className={!cookie ? "hidden" : ""}
            onClick={() => {
              Cookies.remove("tokenVinted");
              setToken("");
            }}
          >
            Se déconnecter
          </button>
        </div>

        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
