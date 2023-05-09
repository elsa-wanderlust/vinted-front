import { useNavigate } from "react-router-dom";
import "./afterPublishing.css";

const AfterPublishing = ({
  _id,
  setNewTitle,
  setNewDescription,
  setNewBrand,
  setNewSize,
  setNewColor,
  setNewCondition,
  setNewLocation,
  setNewPrice,
  setNewPicture,
  setNewOfferId,
}) => {
  // DECLARE VARIABLE(S)
  const navigate = useNavigate();

  return (
    <div className="after-publishing">
      <p>Votre offre a bien été publiée !</p>
      <div className="after-publishing-buttons">
        <button
          onClick={() => {
            navigate(`/offer/${_id}`);
          }}
        >
          Voir ton offre
        </button>
        <button
          onClick={() => {
            setNewTitle("");
            setNewDescription("");
            setNewBrand("");
            setNewSize("");
            setNewColor("");
            setNewCondition("");
            setNewLocation("");
            setNewPrice("");
            setNewPicture("");
            setNewOfferId("");
            navigate(`/publish`);
          }}
        >
          Publie une autre offre
        </button>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Retourne sur la page d'accueil
        </button>
      </div>
    </div>
  );
};

export default AfterPublishing;
