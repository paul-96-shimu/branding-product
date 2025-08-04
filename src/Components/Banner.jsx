import React from 'react';

import bannerimg from  '../assets/Image_Group.jpg'
import underline from '../assets/Vector 163.svg'
import underline2 from  '../assets/Group 427320088 (1).svg'
import { FaArrowUp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Navber from './Navber';

const Banner = () => {
    return (
        <div
            className="min-h-screen"
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


            <div className=" pl-28">
                <h3 className="text-3xl mb-4 ">Hi, I’M JON KABIR</h3>
                <p className="mb-6">
                    <span className="text-[#FF6F0F] text-7xl font-bold">Branding,</span> <br />
                    <span className="text-7xl font-bold text-black">Product UI/UX</span> <br />
                    <span className="text-7xl font-bold text-[#9E9E9E]">& Design.</span>
                </p>

                <div className="mb-6">
                    <small className="block text-lg font-semibold">EMAIL</small>
                    <p className="text-sm text-[#040404]">Contact@rakabir.com</p>
                </div>

                {/* Underlines */}
                <div className="flex items-center gap-4 mb-6">
                    <img src={underline} alt="underline1" />
                    <img src={underline2} alt="underline2" />
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

                </div>
            </div>

        
        </div>
    );
};

export default Banner;