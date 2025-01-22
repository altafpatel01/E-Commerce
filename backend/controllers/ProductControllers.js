const Product = require("../model/ProductModel");
const asyncHandler = require("../middleware/asyncHandler");
const ApiFeature = require("../utils/apifeature");
exports.getProduct = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
  
    let product = await Product.findById(id);
  
    if (!product) {
      return next(new ErrorHandler("product not found", 400));
    }
    res.status(200).json({
      success: true,
      message: "product fetch successfully",
      product,
    });
  });

  exports.getAllProducts = asyncHandler(async (req, res, next) => {
  
    const resultPerPage = process.env.RESULT_PER_PAGE || 12;
    const productCount = await Product.countDocuments();
  
    // Initialize the ApiFeature and apply search/filter, but do not execute the query yet
    const apiFeature = new ApiFeature(Product.find(), req.query)
      .search()
      .filter();
    let products = await apiFeature.query.clone(); // Use clone() to avoid the "Query was already executed" error
  
    let filtersProductCounts = products.length;
  
    // Now apply pagination and execute the paginated query
     apiFeature.pagination(resultPerPage);
    products = await apiFeature.query;
  
    res.status(200).json({
      message: "All products",
      products,
      productCount,
      filtersProductCounts,
      resultPerPage,
    });
  });
  
  exports.createProduct = asyncHandler(async (req, res, next) => {
    
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      message: "product created successfully",
      newProduct,
    });
  });