const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
  // Math.abs will convert a string to a number if possible.
  const page =
    Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  // In MongoDB if the limit is set to zero, all the documents will be returned in the collection.
  const limit =
    Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
