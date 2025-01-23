import React from "react";
import Banner from "./Banner";
import FooterBanner from "./FooterBanner";

const CheckoutPage = () => {
  return (
    <>
    <Banner text="Checkout" />
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8 ">
      {/* Billing Details */}
      <div className="flex-1 bg-white p-6  rounded">
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option value="">Country / Region</option>
            <option value="sri-lanka">Sri Lanka</option>
            {/* Add more countries as needed */}
          </select>
          <input
            type="text"
            placeholder="Street address"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option value="">Province</option>
            <option value="western-province">Western Province</option>
            {/* Add more provinces as needed */}
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Additional information"
            className="border p-2 rounded w-full"
            rows="4"
          ></textarea>
        </form>
      </div>

      {/* Cart Details */}
      <div className="flex-1 bg-white p-6  rounded">
        <h2 className="text-2xl font-bold mb-6">Product</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center font-bold border-t pt-4">
            <span>Total</span>
            <span className="text-gold">Rs. 250,000.00</span>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Direct Bank Transfer
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Cash on Delivery
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other
          purposes described in our privacy policy.
        </p>
        <button className="justify-self-center bg-gold text-white p-2 rounded mt-4 hover:bg-orange-600">
          Place order
        </button>
      </div>
    </div>
    <FooterBanner />
    </>
  );
};

export default CheckoutPage;
