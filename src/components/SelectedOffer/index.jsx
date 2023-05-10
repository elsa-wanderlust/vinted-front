import "./selectedOffer.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SelectedOffer = ({ offerSelected, setModalVisible, setWhichModal }) => {
  // DECLARE VARIABLE(S)
  const {
    _id,
    product_name,
    product_description,
    product_price,
    product_details,
    owner,
    product_image,
    product_availability,
  } = offerSelected;
  let product_details2 = {};
  for (let i = 0; i < product_details.length; i++) {
    for (const [key, value] of Object.entries(product_details[i])) {
      product_details2[key] = value;
    }
  }
  const sellersAvatar = owner.account.avatar;
  const token = Cookies.get("tokenVinted");
  const navigate = useNavigate();

  // DECLARE FUNCTION - clicking "buying" button
  const handleBuy = () => {
    if (token) {
      navigate("/payment", {
        state: {
          description: `identifiant article : ${_id}, intitulé de l'article : ${product_name}`,
          price: product_price,
          productId: _id,
        },
      });
    } else {
      setModalVisible(true);
      setWhichModal("login");
    }
  };

  return (
    <div className="offer-page">
      <section>
        <img src={product_image.secure_url} alt="" />
        {product_availability === false && (
          <div className="sold-container">
            <p className="sold">Vendu !</p>
          </div>
        )}
      </section>
      <section>
        <div className="price-and-item-details">
          <p className="price">{`${product_price} €`}</p>
          <div>
            <article className="item-details-categories">
              {Object.keys(product_details2).map((elem, index) => {
                return <p key={index}>{elem}</p>;
              })}
            </article>
            <article className="item-details-specificities">
              {Object.values(product_details2).map((elem, index) => {
                return <p key={index}>{elem.toUpperCase()}</p>;
              })}
            </article>
          </div>
        </div>
        <div className="description">
          <p>{product_name}</p>
          <p>{product_description}</p>
        </div>
        <div className="seller-info">
          {sellersAvatar && (
            <img
              src={sellersAvatar.url}
              alt={`avatar of ${owner.account.username}`}
            />
          )}
          <p>{owner.account.username}</p>
          {/* BUY button if product is available - redirect to Login modal if not yet connected */}
        </div>
        {product_availability !== false && (
          <button onClick={handleBuy}>Acheter</button>
        )}
      </section>
    </div>
  );
};

export default SelectedOffer;
