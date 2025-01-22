import React from 'react'
import BgImage from '../../asset/images/scandinavian-interior-mockup-wall-decal-background 1.png'

function NewArrival() {
  return (
   <>
    <div className="relative md:h-screen  h-96">
        <img 
          src={BgImage}
          alt="New Collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0"></div>

        <div className="absolute right-2 top-10 md:right-10 md:top-32 flex items-center justify-center text-left px-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-sm sm:max-w-lg z-10">
            <h2 className="text-xl sm:text-2xl text-gold font-semibold uppercase">New Arrival</h2>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mt-4">Discover Our New Collection</h1>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-gold text-white py-2 px-4 rounded mt-6">
              BUY NOW
            </button>
          </div>
        </div>
      </div></>
  )
}

export default NewArrival