import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import Pagination from "@mui/material/Pagination";
import "rc-slider/assets/index.css";

import { IoMdClose } from "react-icons/io";

import Products from "../Product/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Reducers/ProductsReducer";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
function ShopPage() {
  const { keyword } = useParams();
  const [show, setShow] = useState(8);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("Default");
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [rating, setRating] = useState(0);
  const [categories, setCategories] = useState([]);
  const categoryOptions = ["Dining", "Living", "Bedroom"];
  const handleCategoryChange = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleShowChange = (value) => {
    setShow(value);
  };
  const handlePageChange = (event, value) => {
    event.preventDefault();

    setPage(value);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const handleFilters = () => {
    dispatch(fetchProducts({ keyword, page, priceRange, categories, rating })); // Pass categories array
    handleOpen();
  };
  const { products } = useSelector((state) => state.getProducts);

  const handleSortByChange = (value) => {
    setSortBy(value);

   
  };

  useEffect(() => {
    dispatch(fetchProducts({ keyword:'', page }));
  }, [dispatch, keyword, page]);
  return (
    <>
      <Banner text="Shop" />
      {open && (
        <div className="absolute top-[50%] left-[50%] px-5 translate-x-[-50%] translate-y-[-50%] w-64 h-3/4 overflow-scroll fixid bg-cream bg-opacity-100 z-50">
          <h1 className="text-center py-2 text-3xl font-bold">Filters</h1>{" "}
          <IoMdClose
            className="absolute top-2 w-4 h-4 right-2 cursor-pointer"
            onClick={handleOpen}
          />
          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-2">
              Price Range
            </h3>
            <div className="px-2">
              <Slider
                range
                min={0}
                max={50000}
                value={priceRange}
                onChange={handlePriceChange}
                // trackStyle={{ backgroundColor: '#3b82f6' }} // Blue color track
                // handleStyle={[{ borderColor: '#3b82f6' }, { borderColor: '#3b82f6' }]} // Handle color
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600 px-2">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
          {/* Categories Filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-2">
              Categories
            </h3>
            <div className="flex flex-col space-y-2">
              {categoryOptions.map((category) => (
                <label key={category} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="ml-2 text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Ratings Filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-2">
              Minimum Rating
            </h3>
            <div className="px-2">
              <Slider
                min={0}
                max={5}
                step={0.5}
                value={rating}
                onChange={handleRatingChange}
                // trackStyle={{ backgroundColor: '#fbbf24' }} // Yellow color track
                // handleStyle={{ borderColor: '#fbbf24' }} // Handle color
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600 px-2">
              <span>{rating} stars</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleFilters}
              className="bg-gold mx-auto text-white px-4 py-2 rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center bg-filter  px-16 py-3">
        <div className="flex items-center">
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <span onClick={handleOpen} className="ml-2">
              Select Filters
            </span>
          </button>
          <span className="border-l border-black w-1 h-5 mx-5"></span>{" "}
          <span className="mr-4">Showing 1-8 of 12 results</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <label htmlFor="show" className="mr-2">
              Show:
            </label>
            <select
              disabled
              id="show"
              value={show}
              onChange={(e) => handleShowChange(parseInt(e.target.value))}
              className="  border-gray-300  py-1 appearance-none px-1"
            >
              <option value={8}>8</option>
              <option value={32}>32</option>
              <option value={48}>48</option>
            </select>
          </div>
          <div className="ml-4 flex items-center">
            <label htmlFor="sortBy" className="mr-2">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => handleSortByChange(e.target.value)}
              className="appearance-none bg-white px-2 py-1"
            >
              <option value="Default">Default</option>
              <option value="Newest">Price</option>
              <option value="Oldest">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {products && <Products products={products} />}

      <div className="flex justify-center my-8 ">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(2)}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </>
  );
}

export default ShopPage;
