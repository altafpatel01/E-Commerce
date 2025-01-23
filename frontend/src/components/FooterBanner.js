import React from 'react'
import frame from '../asset/images/Frame 161.png';

function FooterBanner() {
  return (
    <div>
        <img src={frame} alt="frame" className=" w-full h-32 md:h-52 object-fill md:object-cover" />
    </div>
  )
}

export default FooterBanner