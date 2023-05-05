import "./filterOffers.css";
import Switch from "react-switch"; // pkg for the price sorting toggle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterOffers = ({
  search,
  setSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  togglePriceDesc,
  setTogglePriceDesc,
}) => {
  // DECLARE FUNCTIONS TO HANDLE CHANGES IN THE 'FILTERS'
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handlePriceMinChange = (event) => {
    setPriceMin(event.target.value);
  };
  const handlePriceMaxChange = (event) => {
    setPriceMax(event.target.value);
  };
  const handleTogglePriceDescChange = () => {
    setTogglePriceDesc(!togglePriceDesc);
  };

  return (
    <div>
      <section className="all-filters">
        <div className="search-field">
          <input
            type="text"
            name="searchField"
            placeholder="Recherche des articles"
            onChange={handleSearchChange}
            value={search}
          />
        </div>
        <div className="price-filters">
          <div className="price-sorting">
            <p>Triez par prix</p>
            <Switch
              checked={togglePriceDesc}
              onChange={handleTogglePriceDescChange}
              // Styling of the price sorting toggle
              boxShadow="none"
              // ASCENDING (default value, considered unchecked in toggle)
              offColor="#2baeb7"
              uncheckedIcon={false}
              offHandleColor="#fff"
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#777",
                    fontSize: 18,
                  }}
                >
                  <FontAwesomeIcon icon="arrow-up" />
                </div>
              }
              // DESCENDING (considered checked in toggle)
              onColor="#2baeb7"
              checkedIcon={false}
              onHandleColor="#fff"
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#777",
                    fontSize: 18,
                  }}
                >
                  <FontAwesomeIcon icon="arrow-down" />
                </div>
              }
            />
          </div>
          <input
            type="number"
            name="price-min"
            placeholder="prix minimum"
            onChange={handlePriceMinChange}
            value={priceMin}
          />
          <input
            type="number"
            name="price-max"
            placeholder="prix maximum"
            onChange={handlePriceMaxChange}
            value={priceMax}
          />
        </div>
      </section>
    </div>
  );
};

export default FilterOffers;
