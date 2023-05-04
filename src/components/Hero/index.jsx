import "./hero.css";
import hero from "../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="personnes regardant des habits" />
      <div>
        <p>Prêts à faire du tri dans vos placards?</p>
        <button>Commencez à vendre</button>
      </div>
    </div>
  );
};
export default Hero;
