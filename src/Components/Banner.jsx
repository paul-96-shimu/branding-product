import React from 'react';

import bannerimg from '../assets/Image_Group.jpg'
import underline from '../assets/Arrow.png'


import underline3 from '../assets/banner side arrow.svg'
import { FaArrowUp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


import image0 from '../assets/double-quote-left.png'

import image2 from '../assets/black Ellipse 881.png'
import image3 from '../assets/Rectangle 3793 (1).png'
import Navber from './Navber';

const Banner = () => {
    return (
        <div
            className=" relative pb-46
            
            "
            style={{
                backgroundImage: `url(${bannerimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >



            {/* Content Section */}

            <div className=' p-6'>
                <Navber></Navber>

            </div>


            <div className="container mx-auto pb-40">
                <h3 className="text-3xl mb-4 ">Hi, I’M JON KABIR</h3>
                <p className="mb-6">
                    <div className='flex items-center  gap-10'>
                        <span className="text-[#FF6F0F] text-7xl font-bold font">Branding,</span> <br />
                        <img src={underline3} alt="" className='w-[295px] h-[116px]' />
                    </div>
                    <span className="text-7xl font-bold text-black ">Product UI/UX</span> <br />
                    <span className="text-7xl font-bold text-[#9E9E9E]">& Design.</span>
                </p>

                <div className="mb-6">
                    <small className="block text-lg font-semibold">EMAIL</small>
                    <p className="text-sm text-[#040404]">Contact@rakabir.com</p>
                </div>

                {/* Underlines */}
                <div className="flex items-center gap-4 mb-6">
                    <img src={underline} alt="underline1" />

                </div>

                {/* Button & Social */}
                <div className="flex items-center gap-10">
                    <button
                        type="button"
                        className="text-white bg-[#FF6F0F] rounded-full text-xl px-6 py-3 flex items-center gap-3"
                    >
                        Let’s Talk <FaArrowUp className="rotate-45" />
                    </button>

                    <div className="flex items-center gap-4 mt-4">
                        <h2 className="font-semibold">Social</h2>
                        <FaFacebookF className="bg-white text-black p-4 w-15 h-15 rounded-full" />
                        <FaInstagram className="bg-white text-black  p-4 w-15 h-15 rounded-full" />
                        <FaLinkedinIn className="bg-white text-black  p-4 w-15 h-15 rounded-full" />
                    </div>

                    <div className='absolute right-180 bottom-20 z-0'  >

                        <img src={image3} alt="" className='w-[390px]' />

                        <h4 className="absolute top-10 left-5 text-blaxk text-lg font-semibold text-center pl-[39px] pr-[33px] pt-[30px] pb-[74px]">
                            "Design tells a story without  <br />saying a word." <br />
                            <small className='text-gray-400'>Jon Kabir</small>
                        </h4>

                        <div className="relative  -top-60">
                            <img src={image2} alt="" className="w-[69px] h-[69px]" />
                            <img
                                src={image0}
                                alt=""
                                className="w-[28px] h-[28px] absolute top-5 left-5 z-10"
                            />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner;