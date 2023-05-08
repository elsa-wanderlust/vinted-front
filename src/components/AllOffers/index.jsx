import "./allOffers.css";
import OfferDisplay from "../OfferDisplay";

const AllOffers = ({ allOffers }) => {
  // console.log(allOffers);
  return (
    <div className="all-offer container">
      {allOffers.map((elem) => {
        return <OfferDisplay key={elem._id} offer={elem} />;
      })}
    </div>
  );
};

export default AllOffers;
