import "./allOffers.css";
import Offer from "../Offer";

const AllOffers = ({ allOffers }) => {
  return (
    <div className="all-offer">
      {allOffers.map((elem) => {
        return <Offer key={elem._id} offer={elem} />;
      })}
    </div>
  );
};

export default AllOffers;
