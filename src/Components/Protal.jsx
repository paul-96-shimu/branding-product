import React from 'react';

import Marquee from "react-fast-marquee";
import icon from '../assets/Amazone.svg'
import icon2 from '../assets/Hurra.svg'
import icon3 from '../assets/djuice222222.svg'
import icon4 from '../assets/insta221222.svg'
import icon5 from '../assets/star1.svg'
import icon6 from '../assets/Kitu.svg'

import icon7 from '../assets/tamil22222.svg'
import icon8 from '../assets/qmij.svg'
import icon9 from '../assets/portal.svg'
import icon10 from '../assets/microsoft.svg'
import icon11 from '../assets/icccc2.svg'








const Protal = () => {
  return (
  <div className="bg-black py-20 mt-20">
      {/* First Row */}
      <Marquee speed={60} gradient={false} pauseOnHover={false}>
        <div className="flex items-center gap-10">
          <img src={icon7} alt="" />
          <img src={icon5} alt="" />
          <img src={icon8} alt="" />
          <img src={icon5} alt="" />
          <img src={icon9} alt="" />
          <img src={icon5} alt="" />
          <img src={icon10} alt="" />
          <img src={icon5} alt="" />
          <img src={icon11} alt="" />
           <img src={icon5} alt="" />
        </div>
      </Marquee>

      {/* Second Row */}
      <Marquee speed={50} gradient={false} pauseOnHover={false} direction="right" className="mt-6">
        <div className="flex items-center gap-10">
          <img src={icon3} alt="" />
          <img src={icon5} alt="" />
          <img src={icon2} alt="" />
          <img src={icon5} alt="" />
          <img src={icon} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon5} alt="" />
          <img src={icon4} alt="" />
           <img src={icon5} alt="" />
           
        </div>
      </Marquee>
    </div>

  );
};

export default Protal;
