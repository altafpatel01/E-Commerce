import React from 'react'
import img1 from '../../asset/CategoryImages/Mask Group.png'
import img2 from '../../asset/CategoryImages/Image-living room.png'
import img3 from '../../asset/CategoryImages/Mask Group(1).png'
function Categories() {
  return (
    <div>
         <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Browse The Range</h2>
        <p className="text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="grid grid-cols-1 px-20 md:grid-cols-3 gap-8">
          <div className="  rounded-lg flex flex-col relative overflow-hidden">
            <img src={img1} alt="Dining Room" className="w-full h-full object-cover" />
            <h3 className="text-xl my-3  font-semibold">Dining</h3>
          </div>

          <div className=" rounded-lg flex flex-col overflow-hidden">
            <img src={img2} alt="Living Room" className="w-full h-full object-cover" />
            
              <h3 className="text-xl my-3 font-semibold">Living</h3>
           
          </div>

          <div className=" rounded-lg flex flex-col overflow-hidden">
            <img src={img3} alt="Bedroom" className="w-full h-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Categories