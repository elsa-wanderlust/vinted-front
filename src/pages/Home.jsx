import { useState, useEffect } from "react";
import axios from "axios";

// IMPORT COMPONENT(S)
import Hero from "../components/Hero";
import AllOffers from "../components/AllOffers";
// IMPORT FUNCTION(S
import handleFilters from "../utils/handleFilters";

const Home = ({ togglePriceDesc, search, priceMin, priceMax }) => {
  // DECLARE STATE(S)
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);

  const filtersQueries = handleFilters(
    togglePriceDesc,
    search,
    priceMin,
    priceMax
  );

  // USE EFFECT - sends a request to the server, each time one of the filters is updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          `http://localhost:3000/offers${filtersQueries}`
        );
        setData(serverResponse.data);
        setisLoading(false);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, [search, priceMin, priceMax, togglePriceDesc]);
  // RETURN
  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <Hero />
          {data.offers.length > 0 ? (
            <AllOffers allOffers={data.offers} />
          ) : (
            <p>Il n'y a pas d'offres qui correspondent à votre recherche</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
