import { useState, useEffect } from "react";
import axios from "axios";

// IMPORT COMPONENTS
import Hero from "../components/Hero";
import AllOffers from "../components/AllOffers";
// IMPORT FUNCTION
import handleFilters from "../utils/handleFilters";

const Home = ({ search, priceMin, priceMax }) => {
  // DECLARE STATES
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);

  const filters = handleFilters(search, priceMin, priceMax);
  console.log(`FILTERS VALUE : ${filters}`);

  // USE EFFECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers${filters || ""}`
        );
        setData(serverResponse.data);
        setisLoading(false);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, [search, priceMin, priceMax]);
  // RETURN
  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <Hero />
          <AllOffers allOffers={data.offers} />
        </div>
      )}
    </div>
  );
};

export default Home;
