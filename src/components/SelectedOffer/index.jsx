import "./selectedOffer.css";

const SelectedOffer = ({ offerSelected }) => {
  const {
    // _id,
    product_name,
    product_description,
    product_price,
    product_details,
    // product_pictures,
    owner,
    product_image,
  } = offerSelected;
  let product_details2 = {};
  for (let i = 0; i < product_details.length; i++) {
    for (const [key, value] of Object.entries(product_details[i])) {
      product_details2[key] = value;
    }
  }
  const sellersAvatar = "";
  // const sellersAvatar = owner.account.avatar.secure_url;
  console.log(sellersAvatar);
  return (
    <div className="offer-page">
      <section>
        {/* TO BE UPDATE WITH CARROUSEL */}
        <img src={product_image.secure_url} alt="" />
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
          {sellersAvatar ? <img src={sellersAvatar} alt="" /> : ""}
          <p>{owner.account.username}</p>
        </div>
        <button>Acheter</button>
      </section>
    </div>
  );
};

export default SelectedOffer;
