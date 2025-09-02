import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import star from '../assets/Star 1.svg';



import location from '../assets/footerLocation Icon.svg'
import phone from '../assets/fotter phIcon.svg'
import sms from '../assets/Message.svg'
import shape from '../assets/white rain.svg'
import logo2 from '../assets/potoLogo.svg'
import orangeshape from '../assets/orange footerShape.png'

const Footer = () => {
    return (
        <div className="bg-black text-white pt-40 pb-5">
            <div className="container mx-auto flex justify-between
            ">
                {/* Left Section */}
                <div className="">
                    <div className='flex items-center  justify-between mb-27'>
                        <div>

                            <h1 className="text-8xl ">
                                <span className="text-[(255, 255, 255, 0.40)] ">Let’s</span>
                                <span className="text-white ml-2">Start</span> <br />
                                <span className="text-[#FF6F0F]">Talking.</span>

                            </h1>

                        </div>
                        <div>
                            <img src={shape} alt="Shape" className="w-[86px] mt-10" />
                        </div>
                    </div>





                    <div className="bg-[#111111] rounded-2xl w-[829px] h-[590px] p-20 text-white mb-46">
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
                                Let’s Talk <FaArrowUp className="rotate-45"

                                />
                            </button>
                        </div>
                    </div>


                </div>



                {/* Right Section */}
                <div className="">


                    <div className="mb-35">

                        <div className="  relative ">

                            <img src={star} alt="Star" className=" w-[252px] h-[252px]" />


                            <div className="absolute inset-0 flex  flex-col items-center justify-center  font-bold  text-black right-30 -rotate-20 ">
                                <h6>LET’S <br /> ROCK & ROLL</h6>

                                <div className=" border-t border-black mt-1 w-[133px]" />
                            </div>






                        </div>
                    </div>

                    <div className="">
                        <div className='flex items-center gap-6 mt-10'>
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
                                <img src={location} alt="" className='w-[48px] ' />
                            </div>
                            <div>
                                <small className="text-[rgba(255, 255, 255, 0.4)] text-[20px]">Office</small>
                                <h3 className="text-[24px] text-[rgba(255, 255, 255, 0.8)] font-normal">
                                    210 Qilo Street, California, <br />
                                    Main OC, USA
                                </h3>
                            </div>
                        </div>


                        <div className="mt-9 relative ml-2 inline-flex items-center gap-6">
                            <p className="text-gray-400 text-[20px] inline">Find Me on</p>

                            <div className="relative inline-block text-center group">
                             
                                <img
                                    src={orangeshape}
                                    alt=""
                                    className="w-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />

                          
                                <span className="absolute top-15 left-10 
                                      font-semibold text-[#FF6F0F] text-[20px] font-satoshi-extra pointer-events-none">
                                    Google Map
                                </span>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            <div className=" border-t border-gray-700  text-sm flex justify-between items-center container mx-auto
            ">
                <h6 >  <span >©2025. </span> <span className="text-gray-500">All Right Reserved</span></h6>
                <img src={logo2} alt="" />
                <div className="text-gray-500 space-x-4 pb-10 mt-15 ">
                    <a href="#" className='text-white text-sm'>Insta</a>  .
                    <a href="#" className='text-gray-500 text-sm'>Facebook</a>  .
                    <a href="#" className='text-gray-500 text-sm'>Twitter</a>
                </div>
            </div>













        </div>
    );
};

export default Footer;
