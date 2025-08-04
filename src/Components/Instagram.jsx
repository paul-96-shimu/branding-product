import React from 'react';
import logoimg from '../assets/image 2507.svg'
import prearrow from '../assets/Prev.svg'
import nextarrow from '../assets/Next.svg'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Instagram = () => {
    return (
        //  <div className='container mx-auto mb-8'>
        //     <div className='flex mt-16      '>
        //         <div>
        //             <h2> <span className='text-black text-4xl '>Instagram</span> <br />
        //                 <span className='text-gray-500 text-4xl'> @rakir.</span> </h2>


        //             <img src={logoimg} alt="" />
        //         </div>

        //         <div className='flex gap-4'>
        //             <div>
        //                 <div className='bg-[#F5F4F5] pt-22 pb-9 pl-8 pr-86'>
        //                 </div>

        //             </div>

        //             <div className=''>
        //                 <div className='bg-[#F5F4F5] pt-22 pb-9 pl-8 pr-86'>
        //                 </div>

        //             </div>
        //             <div className=''>


        //                 <div className='bg-[#F5F4F5] pt-22 pb-9 pl-8 pr-86'>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        //     <div className='flex gap-8'>
        //         <img src={prearrow} alt="" className='w-30' />
        //         <img src={nextarrow} alt="" />

        //     </div>
        // </div>













        <div className="bg-white px-12 py-20 flex items-start justify-between gap-10 container mx-auto mb-8'">
            {/* Left Text Section */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-5xl font-bold text-black">Instagram</h2>
                    <h3 className="text-5xl text-gray-400 font-semibold mt-1">@rakir.</h3>

                    {/* Orange hand-drawn underline (use img or border) */}
                    <img src={logoimg} alt="" />
                </div>

                {/* Arrows */}
                <div className="flex gap-4 mt-10">
                    {/* <button className="w-14 h-14 rounded-full border border-black flex items-center justify-center">
            <FaArrowLeft className="text-black" />
          </button>
          <button className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
            <FaArrowRight className="text-white" />
          </button> */}





                    <div className='flex gap-8'>
                        <img src={prearrow} alt="" className='w-30' />
                        <img src={nextarrow} alt="" />

                    </div>
                </div>
            </div>

            {/* Right Grid Section */}
            <div className="flex gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="w-[240px] h-[240px] bg-gray-200 rounded-md" />
                ))}
            </div>
        </div>
    );
};

export default Instagram;