import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Funiro.</h1>
          </div>
          <div>
            <h3 className="text-lg text-gray-500 mb-2">Links</h3>
            <ul className=" flex flex-col gap-3">
              <li>
                <a href="/" className="text-gray-800 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-800 hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-800 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-gray-500 mb-2">Help</h3>
            <ul className=" flex flex-col gap-3">
              <li>
                <a
                  href="/payment-options"
                  className="text-gray-800 hover:underline"
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-800 hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policies"
                  className="text-gray-800 hover:underline"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-gray-500 mb-2">Newsletter</h3>
            <div className="flex flex-col  md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b-2 bg-inherit border-gray-700 focus:outline-none mb-2 md:mb-0"
              />
              <button className="text-black ml-1 border-b-2 bg-inherit border-gray-700 ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="text-left mt-6">
          <p className="text-gray-500">© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
