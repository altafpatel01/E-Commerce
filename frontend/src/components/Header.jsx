import React, { useState } from "react";
import logo from "../asset/images/Meubel House_Logos-05.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{items} =useSelector(state=>state.cart)
  const navigate = useNavigate();
  const hd = () => {
    navigate("/Cart");
    setIsOpen(false);
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <h1 className="text-2xl font-bold text-black">Furniro</h1>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-black">
            Shop
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-user"></i>
          </button>
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-search"></i>
          </button>
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-heart"></i>
          </button>
          <button onClick={hd} className="text-gray-700 hover:text-black">
            <i className="fas fa-shopping-cart"></i>
            <span className="bg-gold text-white px-1 rounded-full ml-1">
              {items.length}
            </span>
          </button>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link        to="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link        to="/shop"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Shop
          </Link>
          <Link         to="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <Link        to="/contact"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </Link>
          <div className="flex justify-around py-3 border-t">
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-user"></i>
            </button>
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-heart"></i>
            </button>
            <button onClick={hd} className="text-gray-700 hover:text-black">
              <i className="fas fa-shopping-cart"></i>
              <span className="bg-gold text-white px-1 rounded-full ml-1">
              {items.length}
            </span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
