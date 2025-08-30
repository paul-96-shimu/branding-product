import React from 'react';
import img from '../assets/image 2495.png';

import logoimg from '../assets/image 2507.svg'

import underline from '../assets/Arrow.png'

import slider from '../assets/Slider Button.svg'
import icon from '../assets/round bg icon.svg'
import button from '../assets/Button.svg'
import shape from '../assets/rain.svg';
import { FaMobileAlt } from 'react-icons/fa';

const MyLatest = () => {
    return (
        <div className=''>
            <div className='flex   gap-35 mt-60 ml-44  '>
                <h2 className='font-medium pl-30'>
                    <span className='text-black text-8xl'>My Latest</span> <br />
                    <span className='text-gray-500 text-8xl'>Work.</span>

                    <img src={logoimg} alt="" className='w-60' />

                </h2>


                <p className='text-gray-600'>
                    We've done it carefully and simply. We Combined with the <br /> ingredients.

                    <div className="flex items-center gap-4 mb-6">
                        <img src={underline} alt="underline1" />

                    </div>
                </p>

                <div className='mt-12'>
                    <img src={slider} alt="" className='w-30' />
                </div>
            </div>



            <div className=' flex overflow-hidden gap-[80px]'>

                
                <div className="ml-[-1100px] flex pl-20 items-center bg-[#F5F4F5] rounded-4xl container mx-auto">
                    <div>
                        <div className=" relative mb-6 ">

                        </div>
                        <h1 className="text-5xl font-bold text-black">

                        </h1>
                        <p className="mt-4 text-gray-600 ">


                        </p>

                       
                    </div>


                   

                </div>
              


                <div className='w-full bg-[#F5F4F5] flex items-center rounded-4xl' style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                    <div className='pt-10  pl-10 pb-8 '>
                        <div className=" relative mb-6 ">
                            <img src={icon} alt="" className="w-[68px] h-[68px]" />
                            <FaMobileAlt className="text-4xl text-white absolute top-5 left-5  w-[26px] h-[26px]" />
                        </div>
                        <h1 className="text-[48px] font-normal text-black">
                            Mobile Application  <br />Design.
                        </h1>
                        <p className="mt-4 text-gray-600 ">
                            Commonly used in the graphic, print <br />
                            & publishing industris for previewing visual <br /> layout and mockups.
                        </p>

                        <div className='flex gap-20 mt-6'>
                            <img src={button} alt="Star" className="mx-auto mt-2" />

                            <img src={shape} alt="Star" className="mx-auto mt-2  w-10" />
                        </div>
                    </div>

                </div>

                <div className="mr-[-1100px] flex pl-20 items-center bg-[#F5F4F5] rounded-4xl container mx-auto">
                    <div>
                        <div className=" relative mb-6 ">

                        </div>
                        <h1 className="text-5xl font-bold text-black">

                        </h1>
                        <p className="mt-4 text-gray-600 ">

                        </p>

                        <div className='flex gap-20'>

                        </div>
                    </div>

                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>




            </div>



        </div>





    );
};

export default MyLatest;