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

  // Left scroll
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  // Right scroll
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };



  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };





  return (
    <div className="">
      <div className="flex gap-35 mt-60 ml-44">
        <h2 className="font-medium pl-30">
          <span className="text-black text-8xl">My Latest</span> <br />
          <span className="text-[rgba(0,0,0,0.4)] text-8xl">Work.</span>
          <img src={logoimg} alt="" className="w-60" />
        </h2>

        <p className="text-gray-600">
          We've done it carefully and simply. We Combined with the <br /> ingredients.
          <div className="flex items-center gap-4 mb-6">
            <img src={underline} alt="underline1" />
          </div>
        </p>

        {/* Slider Buttons */}

        <div className="flex items-center gap-4">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-black bg-white hover:bg-gray-100 transition"
          >
            <FaLongArrowAltLeft className="w-5 h-5 text-black" />
          </button>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition"
          >
            <FaLongArrowAltRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <div
        ref={sliderRef}
        className="flex gap-[80px] scroll-smooth overflow-hidden"
      >

        <div
          className="w-[800px] h-[500px] bg-[#F5F4F5] flex items-center rounded-4xl shrink-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="pt-10 pl-10 pb-8">
            <div className="relative mb-6">
              <img src={icon} alt="" className="w-[68px] h-[68px]" />
              <FaMobileAlt className="text-4xl text-white absolute top-5 left-5 w-[26px] h-[26px]" />
            </div>
            <h1 className="text-[48px] font-normal text-black">
              Mobile Application <br /> Design.
            </h1>
            <p className="mt-4 text-gray-600">
              Commonly used in the graphic, print <br />
              & publishing industris for previewing visual <br /> layout and
              mockups.
            </p>

            <div className="flex gap-20 mt-6">
              <img src={button} alt="Star" className="mx-auto mt-2" />
              <img src={shape} alt="Star" className="mx-auto mt-2  w-10" />
            </div>
          </div>
        </div>


        <div
          className="w-[800px] h-[500px] bg-[#F5F4F5] flex items-center rounded-4xl shrink-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="pt-10 pl-10 pb-8">
            <div className="relative mb-6">
              <img src={icon} alt="" className="w-[68px] h-[68px]" />
              <FaMobileAlt className="text-4xl text-white absolute top-5 left-5 w-[26px] h-[26px]" />
            </div>
            <h1 className="text-[48px] font-normal text-black">
              Mobile Application <br /> Design.
            </h1>
            <p className="mt-4 text-gray-600">
              Commonly used in the graphic, print <br />
              & publishing industris for previewing visual <br /> layout and
              mockups.
            </p>

            <div className="flex gap-20 mt-6">
              <img src={button} alt="Star" className="mx-auto mt-2" />
              <img src={shape} alt="Star" className="mx-auto mt-2  w-10" />
            </div>
          </div>
        </div>


        <div
          className="w-[800px] h-[500px] bg-[#F5F4F5] flex items-center rounded-4xl shrink-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="pt-10 pl-10 pb-8">
            <div className="relative mb-6">
              <img src={icon} alt="" className="w-[68px] h-[68px]" />
              <FaMobileAlt className="text-4xl text-white absolute top-5 left-5 w-[26px] h-[26px]" />
            </div>
            <h1 className="text-[48px] font-normal text-black">
              Mobile Application <br /> Design.
            </h1>
            <p className="mt-4 text-gray-600">
              Commonly used in the graphic, print <br />
              & publishing industris for previewing visual <br /> layout and
              mockups.
            </p>

            <div className="flex gap-20 mt-6">
              <img src={button} alt="Star" className="mx-auto mt-2" />
              <img src={shape} alt="Star" className="mx-auto mt-2  w-10" />
            </div>
          </div>
        </div>
      </div>














      <div className='py-10'>




        <div className="">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
               <div>
              <h3>6</h3>
            </div>
               <div>
              <h3>6</h3>
            </div>
               <div>
              <h3>6</h3>
            </div>

               <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>

    </div>





  );
};

export default MyLatest;
