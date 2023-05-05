// receives 3 arguments (the filters entered by the user: search field, priceMin and priceMax) and returns a string
// the string will be concatinated to the basic "/" page to send them as query

const handleFilters = (search, priceMin, priceMax) => {
  let filter = "";
  if (search) {
    filter = filter.concat(`?title=${search}`);
  }
  if (priceMin) {
    if (filter === "") {
      filter = filter.concat(`?priceMin=${priceMin}`);
    } else {
      filter = filter.concat(`&priceMin=${priceMin}`);
    }
  }
  if (priceMax) {
    if (filter === "") {
      filter = filter.concat(`?priceMax=${priceMax}`);
    } else {
      filter = filter.concat(`&priceMax=${priceMax}`);
    }
  }
  return filter;
};
export default handleFilters;
