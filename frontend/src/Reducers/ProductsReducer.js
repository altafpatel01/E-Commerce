import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({keyword="",page=1,priceRange=[0,50000],categories=[] , rating=0}) => {
    try {
     
    
      let link =`${process.env.REACT_APP_API_URL}/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${priceRange[0]}&price[lte]=${priceRange[1]}&rating[gte]=${rating}`
      if (categories.length > 0) {
        link +=`&categories=${categories.join(",")}`; // Join selected categories into a comma-separated string
        
      }
      const response = await axios.get(link)
      return response.data
    } catch (error) {
      // Throw a new error to be handled by the extraReducers
      throw new Error(
        error.response.data.message || "Failed to fetch products"
      );
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
        state.message = action.payload.message;
        state.productCount = action.payload.productCount;
        state.filtersProductCounts = action.payload.filtersProductCounts;
        state.resultPerPage = action.resultPerPage;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
