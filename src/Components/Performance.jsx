import React from 'react';

import image from '../assets/Bg.png'

import image1 from '../assets/orange circleImage.png'

import image0 from '../assets/double-quote-left.png'

import image2 from '../assets/black Ellipse 881.png'

import image3 from '../assets/Vector 1234 underline.png'

import image4 from '../assets/Slider Button orange.png'
import image5 from '../assets/image 2495@2x.png'

const Performance = () => {
    return (



        <div className=' w-[1800px] h-[1290px] mx-auto  relative'
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}>
            <div className="flex items-center gap-12">
                {/* ===== Left Side (Images) ===== */}
                <div className="relative w-[960px] h-[804px]">
                    {/* Base image */}
                    <img src={image5} alt="" className="w-[960px] h-[804px]" />

                    {/* Overlay image 1 */}
                    <img
                        src={image1}
                        alt=""
                        className="absolute top-20 left-20 w-[600px] h-[600px]"
                    />

                    {/* Overlay group (image2 + image0) */}
                    <div className="absolute bottom-5 left-10">
                        {/* base of group */}
                        <img src={image2} alt="" className="w-[270px] h-[270px]" />

                        {/* overlay on image2 */}
                        <img
                            src={image0}
                            alt=""
                            className="absolute top-20 left-20 w-[91px] h-[99px]"
                        />
                    </div>




                    <p className="text-[90px] text-black  text-left absolute top-1/3 left-1/2 -translate-x-1/2  font-bold  leading-snug max-w-[700px] ">
                        "Extraordinary Performance
                        Quick solutions. Highly
                        recommended."
                    </p>
                </div>

                {/* ===== Right Side (Text Content) ===== */}
                <div className="">
                    <strong className="block text-2xl font-bold text-black text-left">
                        Shamol Cina
                    </strong>
                    <small className="block text-gray-600 mb-4 text-left">
                        CEO & Head of Sky Tech Inc.
                    </small>

                   <div className='flex gap-80'>


                     <div className='flex items-center gap-6'>
                        <img src={image3} alt="" />


                        <h6 className='text-black
                       
                       '>01/  <span className='text-gray-500'>03</span></h6>



                    </div>

                    <img src={image4} alt="" />
                   </div>


                </div>




            </div>

        </div>
    );
};

export default Performance;