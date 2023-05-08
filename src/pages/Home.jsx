import { useState, useEffect } from "react";
import axios from "axios";

// IMPORT COMPONENT(S)
import Hero from "../components/Hero";
import AllOffers from "../components/AllOffers";
import PagesNumber from "../components/PagesNumber";

// IMPORT FUNCTION(S
import handleFilters from "../utils/handleFilters";

const Home = ({
  search,
  priceMin,
  priceMax,
  togglePriceDesc,
  setModalVisible,
  setWhichModal,
}) => {
  // DECLARE STATE(S)
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  // receives all the filters and concatenate into a string to be send as a query parameters
  const filtersQueries = handleFilters(
    togglePriceDesc,
    pageNumber,
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
        // calculate the number of pages needed (base if 5 offer per page)
        setNumberOfPages(Math.ceil(serverResponse.data.count / 5));
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, [togglePriceDesc, pageNumber, search, priceMin, priceMax]);
  // creates an array, the number of values is the number of pages, each value being the page number
  const pagesTab = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesTab.push(i);
  }
  // RETURN
  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <Hero
            setModalVisible={setModalVisible}
            setWhichModal={setWhichModal}
          />
          {data.offers.length > 0 ? (
            <div>
              <AllOffers allOffers={data.offers} />
              <div className="page-buttons container">
                {pagesTab.map((elem, index) => {
                  return (
                    <PagesNumber
                      key={index}
                      currentPageNumber={elem}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="no-offer-available">
              Il n'y a pas d'offres qui correspondent à votre recherche
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
