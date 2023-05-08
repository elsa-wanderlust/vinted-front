import { useNavigate } from "react-router-dom";

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
}) => {
  // DECLARE VARIABLE(S)
  const navigate = useNavigate();

  return (
    <div>
      <p>Votre offre a bien été publiée !</p>
      <button
        onClick={() => {
          navigate(`/offer/${_id}`);
        }}
      >
        Voir votre offre
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
          navigate(`/publish`);
        }}
      >
        Publier une autre offre
      </button>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Retourner sur la page d'accueil
      </button>
    </div>
  );
};

export default AfterPublishing;
