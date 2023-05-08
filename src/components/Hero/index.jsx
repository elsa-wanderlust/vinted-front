import "./hero.css";
import hero from "../../assets/img/hero.jpg";
import tear from "../../assets/img/tear-hero.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Hero = ({ setModalVisible, setWhichModal }) => {
  // DECLARE VARIABLE(S)
  const navigate = useNavigate();
  const token = Cookies.get("tokenVinted");

  return (
    <div className="hero">
      <div className="hero-images">
        <img src={hero} alt="personnes regardant des habits" />{" "}
        <div className="tear">
          <img src={tear} alt="effet déchiré de l'image en bas à droite" />
        </div>
      </div>
      <div className="hero-selling-section">
        <p>Prêts à faire du tri dans vos placards?</p>
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
          Commencez à vendre
        </button>
      </div>
    </div>
  );
};
export default Hero;
