import { useState, useEffect } from "react";
import axios from "axios"; // to be able to send request

// IMPORT COMPONENTS
import Hero from "../components/Hero";
import AllOffers from "../components/AllOffers";

const Home = () => {
  // DECLARE STATES
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(serverResponse.data);
        setisLoading(false);
        // console.log(serverResponse.data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>isloading</p>
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
