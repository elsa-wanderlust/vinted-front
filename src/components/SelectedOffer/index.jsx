const SelectedOffer = ({ offerSelected }) => {
  const {
    // _id,
    product_name,
    product_description,
    product_price,
    product_details,
    // product_pictures,
    owner,
    // product_image,
  } = offerSelected;
  let product_details2 = {};
  for (let i = 0; i < product_details.length; i++) {
    for (const [key, value] of Object.entries(product_details[i])) {
      product_details2[key] = value;
    }
  }
  const { MARQUE, TAILLE, ÉTAT, COULEUR, EMPLACEMENT } = product_details2;
  return (
    <div>
      <div className="offer-page">
        <div className="container">
          <section className="pictures-offer-page">
            <p>CARROUSEL MULTIPLE PIC</p>
            {/* <img src="" alt="" /> */}
          </section>
          <section className="items-details-offer-page">
            <div className="price-and-item-details">
              <p className="price">{`${product_price.toFixed(2)} €`}</p>
              <div className="item-details">
                <div>
                  <p>MARQUE</p>
                  <p>{MARQUE}</p>
                </div>
                <div>
                  <p>TAILLE</p>
                  <p>{TAILLE}</p>
                </div>
                <div>
                  <p>ÉTAT</p>
                  <p>{ÉTAT}</p>
                </div>
                <div>
                  <p>COULEUR</p>
                  <p>{COULEUR}</p>
                </div>
                <div>
                  <p>EMPLACEMENT</p>
                  <p>{EMPLACEMENT}</p>
                </div>
              </div>
            </div>
            <div>
              <p>{product_name}</p>
              <p>{product_description}</p>
              <p>{owner.account.username}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SelectedOffer;
