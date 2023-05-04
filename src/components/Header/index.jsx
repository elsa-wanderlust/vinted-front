import "./header.css";
import logo from "../../assets/img/vinted-logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>

          <button>Se connecter</button>
        </div>

        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
