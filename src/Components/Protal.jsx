import React from 'react';
import icon from '../assets/Amazone.svg'
import icon2 from '../assets/Hurra.svg'
import icon3 from '../assets/Djuice.svg'
import icon4 from '../assets/Instagram.svg'
import icon5 from '../assets/Vector (1).svg'
import icon6 from '../assets/Kitu.svg'


const Protal = () => {
  return (
    <div className='bg-black'>
      <img src={icon5} alt="" />
      <div className='flex justify-evenly'>
        <img src={icon3} alt="" srcset="" />
        <img src={icon2} alt="" srcset="" />
        <img src={icon} alt="" srcset="" />

 <img src={icon6} alt="" srcset="" />
        <img src={icon4} alt="" srcset="" />
       
      </div>



    </div>
  );
};

export default Protal;