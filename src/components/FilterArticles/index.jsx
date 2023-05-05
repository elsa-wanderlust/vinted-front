const FilterArticle = ({
  search,
  setSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
}) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handlePriceMinChange = (event) => {
    setPriceMin(event.target.value);
  };
  const handlePriceMaxChange = (event) => {
    setPriceMax(event.target.value);
  };

  return (
    <div>
      <section className="search-field">
        <form>
          <input
            type="text"
            name="searchField"
            placeholder="Recherche des articles"
            onChange={handleSearchChange}
            value={search}
          />
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
        </form>
      </section>
    </div>
  );
};

export default FilterArticle;
