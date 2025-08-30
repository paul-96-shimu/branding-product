import React from 'react';

import image from '../assets/Bg.png'

import image1 from '../assets/orange circleImage.png'

import image0 from '../assets/double-quote-left.png'

import image2 from '../assets/black Ellipse 881.png'

import image3 from '../assets/Vector 1234 underline.png'

import image4 from '../assets/Slider Button orange.png'
import image5 from '../assets/image 2495@2x.png'
import image6 from '../assets/Text Shape.png'
import shape from '../assets/Shape 4444.svg';


const Performance = () => {
    return (


        <div className='relative'


     
            style={{
                // backgroundImage: `url(${image})`,
                backgroundImage:`url(${image })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}>
            <div className="flex items-center gap-12 container mx-auto pb-86 pt-35">
                {/* ===== Left Side (Images) ===== */}
                <div className="relative shrink-0  w-[660px] h-[804px]">
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




                  
                </div>

                {/* ===== Right Side (Text Content) ===== */}
                <div className="text-right">
                    <div>
                        <img src={ shape } alt="" className='w-[86px] h-[89px]' />
                        
                        <strong className="block text-xl font-normal text-black">
                        Shamol Cina
                    </strong>
                    <small className=" text-gray-400 text-[20px] mb-4 ">
                        CEO & Head of Sky Tech Inc.
                    </small></div>
                      <p className="text-[90px] text-black ml-[-500px] relative z-10  font-normal  leading-snug ">
                        "Extraordinary Performance
                        Quick solutions. Highly
                        recommended."
                    </p>

                   <div className='flex justify-end gap-80'>


                     <div className='flex items-center gap-6 mt-16 '>
                        <img src={image3} alt="" />


                        <h6 className='text-black
                       
                       '>01/  <span className='text-gray-500'>03</span></h6>



                    </div>

                   <div>
                     <img src={image4} alt="" className='mt-16' />
                   </div>
                   </div>


                </div>




            </div>


            <img src={image6} alt="" className='absolute  right-[-10px] bottom-[-70px] px-10 ' />

        </div>
    );
};

export default Performance;