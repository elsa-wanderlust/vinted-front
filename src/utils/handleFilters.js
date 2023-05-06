// receives 5 arguments (price sorting, page number, the search, priceMin and priceMax entered by the user) and returns a string
// the string will be concatenated to the by default "/" page to send the filters as query

const handleFilters = (
  togglePriceDesc,
  pageNumber,
  search,
  priceMin,
  priceMax
) => {
  let filterQueries = "?";
  // togglePriceDesc has always a value (false by default)
  if (togglePriceDesc) {
    filterQueries = filterQueries.concat(`sort=price-desc`);
  } else {
    filterQueries = filterQueries.concat(`sort=price-asc`);
  }
  // pageNumber has always a value (1 by default)
  filterQueries = filterQueries.concat(`&page=${pageNumber}`);
  if (search) {
    filterQueries = filterQueries.concat(`&title=${search}`);
  }
  if (priceMin) {
    filterQueries = filterQueries.concat(`&priceMin=${priceMin}`);
  }
  if (priceMax) {
    filterQueries = filterQueries.concat(`&priceMax=${priceMax}`);
  }

  return filterQueries;
};
export default handleFilters;
