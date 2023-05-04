import { useState, useEffect } from "react";
import axios from "axios"; // to be able to send request
import { useParams } from "react-router-dom";

// IMPORT COMPONENTS
import SelectedOffer from "../components/SelectedOffer/";

const Offer = () => {
  // DECLARE STATES
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  // HANDLE PARAMS
  const { id } = useParams();
  // HANDLE PARAMS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(serverResponse.data);
        setisLoading(false);
        // console.log(serverResponse.data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
    // because the request includes the ID, we need to include it as a dependency of UseEffect
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>isloading</p>
      ) : (
        <div>
          <SelectedOffer offerSelected={data} />
        </div>
      )}
    </div>
  );
};
export default Offer;