import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import star from '../assets/Star 1.svg';



import location from '../assets/Location Icon.svg'
import phone from '../assets/Icon (1).svg'
import sms from '../assets/Message.svg'
import shape from '../assets/white rain.svg'
import logo2 from '../assets/potoLogo.svg'

const Footer = () => {
    return (
        <div className="bg-black text-white px-10 py-20">
            <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-16">
                {/* Left Section */}
                <div className="space-y-10">
                    <h1 className="text-8xl ">
                        <span className="text-gray-400">Let’s</span>
                        <span className="text-white">Start</span> <br />
                        <span className="text-[#FF6F0F]">Talking.</span>
                    </h1>

                  


                    <div className="bg-[#111111] rounded-2xl p-10 w-[829px] h-[590px] text-white space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">
                                Name<span className="text-red-white">*</span>
                            </label>
                            <input
                                type="text"
                                readOnly
                                className="bg-transparent w-full border-b border-gray-600 outline-none py-2 text-white"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">
                                Email<span className="text-red-white">*</span>
                            </label>
                            <input
                                type="email"
                              
                                readOnly
                                className="bg-transparent w-full border-b border-gray-600 outline-none py-2 text-white"
                            />
                        </div>

                        {/* Project Field */}
                        <div className='pt-[160px]'>
                            <label className="text-sm text-gray-400 block mb-1">
                                Describe Your Project
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                className="bg-transparent w-full border-b border-gray-600 outline-none py-2 text-white"
                            />
                        </div>

                        {/* Button */}
                       <div className=''>

                         <button className="mt-10 bg-[#FF6F0F] text-white pt-3 pb-3 pl-8 pr-15 rounded-full flex items-center gap-2 text-[20px] hover:bg-orange-500 transition-all">
                            Let’s Talk <FaArrowUp   className="rotate-45"
                            
                            />
                        </button>
                       </div>
                    </div>


                </div>
                <div>
                    <img src={shape} alt="Shape" className="w-[86 px]" />
                </div>


                {/* Right Section */}
                <div className="">


                    <div className="">

                        <div className="text-center mt-4  relative w-[140px] h-[140px] rotate-[-20deg]">

                            <img src={star} alt="Star" className="mx-auto mt-2" />


                            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-[12px] font-semibold leading-tight text-center">
                                <span>LET’S</span>
                                <span>ROCK & ROLL</span>
                                <div className="w-10 border-t border-black mt-1" />
                            </div>






                        </div>
                    </div>

                    <div className="mt-[160px] space-y-6">
                        <div className='flex items-center gap-6'>
                            <div>
                                <img src={sms} alt="" className='w-[57px]' />
                            </div>
                            <div>
                                <small className="text-gray-400 text-[20px]">Email</small>
                                <h3 className="text-[28px]">Hellome@rakabir.com</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 mt-20'>

                            <div>
                                <img src={phone} alt="" className='w-[53px]' />
                            </div>
                            <div>
                                <small className="text-gray-400 text-[20px]">Phone</small>
                                <h3 className="text-[24px]">+(21) 920 100 320</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 mt-20'>

                            <div className=''>
                                <img src={location} alt="" className='w-[48px] bg-black' />
                            </div>
                            <div>
                                <small className="text-gray-400 text-[20px]">Office</small>
                                <h3 className="text-[24px]">
                                    210 Qilo Street, California, <br />
                                    Main OC, USA
                                </h3>
                            </div>
                        </div>



                        <div className="relative mt-10 inline-block">
                            <p className="text-gray-400 text-[20px] inline">Find Me on</p>

                            <span className="relative inline-block ml-2 font-semibold text-[#FF6F0F] text-[20px]">
                                Google Map
                              
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-gray-700 pt-6 text-sm flex justify-between items-center">
              <h6>  <span >©2025. </span> <span className="text-gray-500">All Right Reserved</span></h6>
                <img src={logo2} alt="" />
                <div className="text-gray-500 space-x-4">
                    <a href="#" className='text-white text-xl'>Insta</a>  .
                    <a href="#" className='text-gray-500 text-xl'>Facebook</a>  .
                    <a href="#" className='text-gray-500 text-xl'>Twitter</a>
                </div>
            </div>













        </div>
    );
};

export default Footer;
