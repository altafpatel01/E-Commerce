import React, { useState } from "react";
import logo from "../asset/images/Meubel House_Logos-05.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="/" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="/shop" className="text-gray-700 hover:text-black">
            Shop
          </a>
          <a href="/about" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </a>
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
          <button className="text-gray-700 hover:text-black">
            <i className="fas fa-shopping-cart"></i>
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
          <a
            href="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="/shop"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Shop
          </a>
          <a
            href="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="/contact"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
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
            <button className="text-gray-700 hover:text-black">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
