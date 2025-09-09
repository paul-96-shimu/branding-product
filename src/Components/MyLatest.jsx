import React, { useRef } from 'react';
import img from '../assets/image 2495.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoimg from '../assets/image 2507.svg';
import underline from '../assets/Arrow.png';

import icon from '../assets/round bg icon.svg';
import button from '../assets/Button.svg';
import shape from '../assets/rain.svg';
import { FaMobileAlt } from 'react-icons/fa';

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Slider from 'react-slick';



const MyLatest = () => {
  const sliderRef = useRef(null);





  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "500px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  }











  return (
    <div className="">
      <div className="flex gap-35 mt-60 mb-[40px] ml-44">


        <div lassName=" ">


          <h2 className="font-medium pl-30 ">
            <span className="text-black text-8xl">My Latest</span> <br />
            <span className="text-[rgba(0,0,0,0.4)] text-8xl">Work.</span>
            
            <img
              src={logoimg}
              alt=""
              className=" w-[311px] h-[79px] rotate-0"
            />
          </h2>

        </div>




       <div>

         <p className="text-gray-600">
          We've done it carefully and simply. We Combined with the <br /> ingredients.
          <div className="flex items-center gap-4 mb-6">
            <img src={underline} alt="underline1" />
          </div>
        </p>

       </div>




        {/* Custom Arrows */}

        <div className="flex items-center gap-4">
          {/* Left Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition"
          >
            <FaLongArrowAltLeft className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition"
          >
            <FaLongArrowAltRight className="w-5 h-5" />
          </button>
        </div>

      </div>





      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="px-4">
              <div
                className="w-full h-[500px] bg-[#F5F4F5] flex items-center rounded-4xl relative "
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="p-10">
                  <div className="relative mb-6">
                    <img src={icon} alt="" className="w-16 h-16" />
                    <FaMobileAlt className="text-4xl text-white absolute top-5 left-5 w-6 h-6" />
                  </div>
                  <h1 className="text-4xl font-normal text-black">
                    Mobile Application <br /> Design.
                  </h1>
                  <p className="mt-4 text-gray-600 max-w-md">
                    Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.
                  </p>
                  <div className="flex gap-6 mt-6">
                    <img src={button} alt="Button" className="w-16" />
                    <img src={shape} alt="Shape" className="w-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>









    </div>





  );
};

export default MyLatest;
