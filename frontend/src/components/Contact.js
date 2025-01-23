import React from "react";
import Banner from "./Banner";
import FooterBanner from "./FooterBanner";

const Contact = () => {
  return (
    <>
    <Banner text="Contact Us" />
    <div className="bg-gray-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Get in Touch
        </h2>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="flex-1 bg-white p-6 sm:p-8 shadow-lg rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Fields */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-3 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We would love to hear from you! Whether you have a question about
              our products, need assistance, or just want to share your
              experience, our team is here to help.
            </p>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </span>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-gray-600">support@shopease.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">Address</p>
                  <p className="text-gray-600">
                    123 Furniture Avenue, Suite 456<br />
                    City, State, ZIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBanner />
    </>
  );
};

export default Contact;
