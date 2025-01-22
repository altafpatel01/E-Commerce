class ApiFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString; // Using a more descriptive variable name
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i", // case-insensitive
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryStringCopy = { ...this.queryString };

    const deleteFields = ["keyword", "page", "limit"];
    deleteFields.forEach((key) => delete queryStringCopy[key]);

    if (this.queryString.categories) {
      const categoriesArray = this.queryString.categories.split(",");

      queryStringCopy.category = {
        $in: categoriesArray,
      };

      delete queryStringCopy.categories;
    }

    let queryStr = JSON.stringify(queryStringCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    const newquery = JSON.parse(queryStr);

    this.query = this.query.find(newquery); // Pass newquery directly without wrapping in an object

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = this.queryString.page || 1; // Ensure currentPage is a number
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this; // Return the updated query handler instance
  }
}

module.exports = ApiFeature;
