import React from "react";

function GridPhoto() {
  return (
    <>
    <h4 className="text-center">Share your setup with</h4>
      <h2 className="text-3xl text-center font-bold ">#FuniroFurniture</h2>
      <div className="grid grid-cols-10 grid-rows-12 gap-4 h-1/4 px-10">
        <div className="row-span-5 row-start-2">
          <img
            src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-3 col-start-2 row-start-4">
          <img
            src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-7">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-4 col-start-5 row-start-5">
          <img
            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-4 col-start-1 row-start-7">
          <img
            src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-7 row-start-3">
          <img
            src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-4 col-start-9 row-start-2">
          <img
            src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-4 col-start-7 row-start-6">
          <img
            src="https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-8 row-start-6">
          <img
            src="https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="8"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default GridPhoto;
