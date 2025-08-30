import React from 'react';
import logoimg from '../assets/image 2507.svg'
import prearrow from '../assets/Prev.svg'
import nextarrow from '../assets/Next.svg'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Instagram = () => {
    return (












        <div className="bg-white ">
            <div className='px-10 py-20 flex items-start justify-between  mb-8 overflow-hidden mt-16'>


                {/* Left Text Section */}
                <div className="flex flex-col pl-30">
                    <div>
                        <h2 className="text-[90px] font-bold text-black">Instagram</h2>
                        <h3 className="text-[90px] text-gray-300 font-semibold mt-1">@rakir.</h3>

                        {/* Orange hand-drawn underline (use img or border) */}
                        <img src={logoimg} alt="" className='w-[269px] h-[79px]' />
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-4 mt-10">





                        <div className='flex gap-8'>
                            <img src={prearrow} alt="" className='w-30' />
                            <img src={nextarrow} alt="" />

                        </div>
                    </div>
                </div>

                {/* Right Grid Section */}
                <div className="flex gap-6 ml-10">
                    <div className='bg-[#E6E6E6] w-[440px]  h-[480px] '>


                    </div>
                    <div className='bg-[#E6E6E6] w-[440px]  h-[480px]'>


                    </div>
                    <div className='bg-[#E6E6E6] w-[440px]  h-[480px] mr-[-300px] '>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;