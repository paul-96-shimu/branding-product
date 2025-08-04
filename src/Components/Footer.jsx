import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import star from '../assets/Star 1.svg';
import shape from '../assets/shape.svg';
import location from '../assets/Location Icon.svg'
import phone from '../assets/Icon (1).svg'
import sms from '../assets/Message.svg'
// import circle from '../assets/Rectangle 3825.svg'
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

                    {/* <div className="space-y-6 mt-26 bg-[#181818] ">
                        <div className='pl-24 pb-15 pt-11 pr-16'>
                            <div>
                                <small className="text-gray-400">Name*</small>
                                <h2 className="text-xl">Rashed Kabir</h2>
                                <div className="border-b border-gray-600 w-[465px]" />
                            </div>

                            <div>
                                <small className="text-gray-400">Email*</small>
                                <h2 className="text-xl">rakabir@gmail.com</h2>
                                <div className="border-b border-gray-600 w-[465px]" />
                            </div>

                            <div>
                                <p className="text-gray-400">Describe Your Project</p>
                                <div className="border-b border-gray-600 w-[465px]" />
                            </div>

                        </div>
                        <div className='pl-24 pb-15 pr-[575px] '>
                            <button
                                type="button"
                                className="flex gap-4 items-center"
                            >
                                Let’s Talk <FaArrowUp className="rotate-45" />
                            </button>
                        </div>
                    </div> */}






                    <div className="bg-[#111111] rounded-2xl p-10 w-[500px] text-white space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">
                                Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value="Rashed Kabir"
                                readOnly
                                className="bg-transparent w-full border-b border-gray-600 outline-none py-2 text-white"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-1">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value="rshdkabir@gmail.com"
                                readOnly
                                className="bg-transparent w-full border-b border-gray-600 outline-none py-2 text-white"
                            />
                        </div>

                        {/* Project Field */}
                        <div>
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
                        <button className="mt-6 bg-[#FF6F0F] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm hover:bg-orange-500 transition-all">
                            Let’s Talk <FaArrowUp   className="rotate-45"
                            
                            />
                        </button>
                    </div>


                </div>
                <div>
                    <img src={shape} alt="Shape" className="w-[200px]" />
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
                        <div className='flex items-center gap-4'>
                            <div>
                                <img src={sms} alt="" className='w-6' />
                            </div>
                            <div>
                                <small className="text-gray-400">Email</small>
                                <h3 className="text-lg">Hellome@rakabir.com</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <div>
                                <img src={phone} alt="" className='w-6' />
                            </div>
                            <div>
                                <small className="text-gray-400">Phone</small>
                                <h3 className="text-lg">+(21) 920 100 320</h3>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <div className=''>
                                <img src={location} alt="" className='w-6 bg-black' />
                            </div>
                            <div>
                                <small className="text-gray-400">Office</small>
                                <h3 className="text-lg">
                                    210 Qilo Street, California, <br />
                                    Main OC, USA
                                </h3>
                            </div>
                        </div>



                        <div className="relative mt-10 inline-block">
                            <p className="text-gray-400 text-lg inline">Find Me on</p>

                            <span className="relative inline-block ml-2 font-semibold text-[#FF6F0F] text-lg">
                                Google Map
                                {/* Orange Circle Positioned */}
                                {/* <img
                                    src={circle}
                                    alt="Highlight"
                                    className="absolute -top-3 -left-2 w-[120%] pointer-events-none"
                                /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-gray-700 pt-6 text-sm flex justify-between items-center">
                <span className="text-gray-500">©2025. All Right Reserved</span>
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
