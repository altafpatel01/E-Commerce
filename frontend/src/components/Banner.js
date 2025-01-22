import React from 'react';
import img1 from '../asset/Banners/Rectangle 1.png'
const Banner = ({test}) => {
    return (
        <div  className=" text-black  border w-full h-64 relative">
            <img src={img1} alt="banner" className="w-full h-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-4xl font-bold">{test}</h1>
                </div>

        </div>
    );
};

export default Banner;
