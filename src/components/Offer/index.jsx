import "./offer.css";
import { Link } from "react-router-dom";

const Offer = ({ offer }) => {
  const {
    _id,
    // product_name,
    product_price,
    product_details,
    // product_pictures,
    owner,
    product_image,
  } = offer;

  const mainPicture = product_image.secure_url;
  const sellersName = owner.account.username;
  const sellersAvatar = offer.owner.account.avatar;
  return (
    <article className="each-offer">
      <div className="seller">
        <div>
          {sellersAvatar ? (
            <img src={sellersAvatar.url} alt={`image of ${sellersName}`} />
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
        <div>
          <p>{`${product_price} €`}</p>
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

          {/* <p>{product_price}</p>
          <p>{TAILLE}</p>
          <p>{MARQUE}</p> */}
        </div>
      </Link>
    </article>
  );
};

export default Offer;
