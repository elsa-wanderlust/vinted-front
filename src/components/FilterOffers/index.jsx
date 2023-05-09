import "./filterOffers.css";
import Switch from "react-switch"; // pkg for the price sorting toggle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";

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
  // DEBUT ESSAI
  // const navigate = useNavigate();
  // const params = { title: { search }, priceMin: { priceMin } };
  // const handleSubmitSearch = () => {
  //   navigate({
  //     pathname: "/",
  //     search: `?${createSearchParams(params)}`,
  //   });
  // };
  // FIN ESSAI

  // DECLARE FUNCTIONS TO HANDLE CHANGES IN THE 'FILTERS'
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handlePriceMinChange = (event) => {
    console.log(`pricemin ${event.target.value}`);
    if (priceMax === "" && event.target.value >= 0) {
      setPriceMin(event.target.value);
    } else if (
      priceMax !== "" &&
      event.target.value <= priceMax &&
      event.target.value >= 0
    ) {
      setPriceMin(event.target.value);
    }
  };
  const handlePriceMaxChange = (event) => {
    console.log(`pricemax ${event.target.value}`);
    if (priceMin === "" && event.target.value >= 0) {
      console.log("if option 1");
      setPriceMax(event.target.value);
    } else if (priceMin !== "" && priceMax === "") {
      setPriceMax(Number(priceMin) + 1);
      console.log(" else if option 2");
    } else if (
      priceMin !== "" &&
      event.target.value >= priceMin &&
      event.target.value >= 0
    ) {
      console.log(" else if option 3");
      setPriceMax(event.target.value);
    }
    console.log("outisde");
  };
  const handleTogglePriceDescChange = () => {
    setTogglePriceDesc(!togglePriceDesc);
  };

  return (
    <div>
      <section className="all-filters">
        <div className="search-field">
          <FontAwesomeIcon
            className="magnifying-glass"
            icon="magnifying-glass"
          />
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
            <p>Triez par prix </p>
            <Switch
              checked={togglePriceDesc}
              onChange={handleTogglePriceDescChange}
              // Styling of the price sorting toggle
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
                    fontSize: 12,
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
                    fontSize: 12,
                  }}
                >
                  <FontAwesomeIcon icon="arrow-down" />
                </div>
              }
            />
          </div>
          <div className="price-min-max">
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
          {/* <button onClick={handleSubmitSearch}>Rechercher</button> */}
        </div>
      </section>
    </div>
  );
};

export default FilterOffers;
