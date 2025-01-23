import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./Reducers/CartReducer"; 
import productsReducer from "./Reducers/ProductsReducer";
import ProductDetail from './Reducers/ProductDetail';
const store = configureStore({
  reducer: {
     cart: cartReducer, 
     getProducts: productsReducer,
      getProductDetails: ProductDetail,
  },
});

export default store;