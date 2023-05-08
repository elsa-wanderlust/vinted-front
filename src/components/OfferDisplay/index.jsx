import "./offerDisplay.css";
import { Link } from "react-router-dom";

const OfferDisplay = ({ offer }) => {
  const {
    _id,
    // product_name,
    product_price,
    product_details,
    // product_pictures,
    owner,
    product_image,
  } = offer;
  // console.log(offer);
  // console.log(product_image);
  const mainPicture = product_image.secure_url;
  const sellersName = owner.account.username;
  const sellersAvatar = owner.account.avatar;
  return (
    <article className="each-offer">
      <div className="seller">
        <div>
          {sellersAvatar ? (
            <img src={sellersAvatar.url} alt={`avatar of ${sellersName}`} />
          ) : (
            ""
          )}
        </div>
        <p>{sellersName}</p>
      </div>
      <Link className="link-to-offer" to={`/offer/${_id}`}>
        <div className="main-image-container">
          <img src={mainPicture} alt="" />
        </div>
        <div className="home-product-details">
          <p className="price">{`${product_price} €`}</p>
          {product_details
            .slice(0)
            .reverse()
            .map((elem, index) => {
              return (
                <div key={index}>
                  <p>{elem.TAILLE}</p>
                  <p>{elem.MARQUE}</p>
                </div>
              );
            })}
        </div>
      </Link>
    </article>
  );
};

export default OfferDisplay;
