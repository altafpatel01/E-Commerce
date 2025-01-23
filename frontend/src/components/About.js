import React from "react";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import FooterBanner from "./FooterBanner";
const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <>
    <Banner text="About Us" />  
    <div className="bg-gray-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
       
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Furniture"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Transforming Spaces with Style and Comfort
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At <span className="font-bold text-gold">Furniro</span>, we
              are passionate about making your living spaces elegant,
              functional, and inviting. We offer a curated selection of
              high-quality furniture that blends modern design with timeless
              craftsmanship.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Whether you are furnishing a cozy apartment or designing a lavish
              home, we have the perfect pieces to match your unique style and
              needs. From luxurious sofas to ergonomic office chairs, every
              item in our collection is carefully chosen to meet our high
              standards of quality and durability.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              To inspire and empower our customers to create beautiful and
              functional spaces by providing premium furniture at competitive
              prices, all while delivering an exceptional shopping experience.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Why Choose Us?
            </h4>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>Wide range of modern and stylish furniture.</li>
              <li>High-quality materials for lasting durability.</li>
              <li>Customer-centric service and easy returns.</li>
              <li>Fast and reliable delivery to your doorstep.</li>
            </ul>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
            Ready to Transform Your Space?
          </h4>
          <button onClick={()=>navigate('/shop')} className="bg-gold text-sm sm:text-base lg:text-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-orange-600">
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <FooterBanner />
    </>
  );
};

export default AboutUs;
