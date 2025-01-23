import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/HomeComponents/Home.js';
import Footer from './components/Footer.js';
import ShopPage from './components/ShopComponents/ShopPage.js';
import ProductDetails from './components/ProductDetail.js';
import CartPage from './components/CartPage.js';
import Checkout from './components/Checkout.js';
import { useDispatch } from 'react-redux';
import { initializeCart } from './Reducers/CartReducer.js';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( initializeCart());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
