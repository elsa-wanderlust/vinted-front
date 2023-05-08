import { useState } from "react";
import axios from "axios"; // to be able to send request
import Cookies from "js-cookie";
import "./offerPublish.css";

const OfferPublish = () => {
  // DECLARE STATE(S)
  const [newPicture, setNewPicture] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newCondition, setNewCondition] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newPrice, setNewPrice] = useState("");
  //   const [newSwap, setNewSwap] = useState(false);

  // DECLARE FUNCTION(S)
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // need to create a new instance of the FormData constructor (when sending file(s), we cant do it as body but need to use FormData)
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("description", newDescription);
      formData.append("brand", newBrand);
      formData.append("size", newSize);
      formData.append("color", newColor);
      formData.append("condition", newCondition);
      formData.append("city", newLocation);
      formData.append("price", newPrice);
      formData.append("picture", newPicture);

      const token = Cookies.get("tokenVinted");

      const serverResponse = await axios.post(
        `http://localhost:3000/offer/publish`,
        formData,
        {
          headers: { authorization: `Bearer ${token}` },
          "Content-Type": "multipart/form-data",
        }
      );
      //   console.log(serverResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        <section className="add-picture">
          <input
            type="file"
            onChange={(event) => {
              // console.log(event.target.files[0]);
              setNewPicture(event.target.files[0]);
            }}
          />
        </section>
        <section className="new-title-desc"></section>
        <input
          type="text"
          placeholder="ex: Chemise turquoise à rayures jaunes"
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ex: chemise légère et moche, idéale pour bricoler et jardiner"
          value={newDescription}
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
        <section className="new-product-details">
          <input
            type="text"
            placeholder="ex: Intermarché"
            value={newBrand}
            onChange={(event) => {
              setNewBrand(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="ex: L / 40 / 12"
            value={newSize}
            onChange={(event) => {
              setNewSize(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="ex: Turquoise flashy et jaune douteux"
            value={newColor}
            onChange={(event) => {
              setNewColor(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="ex: très peu portée"
            value={newCondition}
            onChange={(event) => {
              setNewCondition(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="ex: très peu portée"
            value={newLocation}
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
          />
        </section>
        <section className="new-product-price">
          <input
            type="text"
            placeholder="0,00 €"
            value={newPrice}
            onChange={(event) => {
              setNewPrice(event.target.value);
            }}
          />
        </section>
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default OfferPublish;
