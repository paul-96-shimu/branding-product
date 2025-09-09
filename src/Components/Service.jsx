import React from 'react';

import logoimg from '../assets/image 2507.svg'
import logoimg2 from '../assets/SHape Arrow.svg'
import logoimg3 from '../assets/Icon.svg'
import logoimg4 from '../assets/obile.svg'
import logoimg5 from '../assets/book.svg'
import arrow from '../assets/Arrow (1).svg'


import work from '../assets/WORK bg.png'


const Service = () => {
    return (
        <div className='relative'>

            <div className='bg-[#141414]  '>

                <div className='pt-[155px] pl-[179px]  flex gap-[76px]  '>


                    <div className=' '>
                        <h1 className=''> <span className='text-white text-[90px] leading-[100px]'>Service That </span> <br />
                            <span className='text-[rgba(255,255,255,0.40)] text-[90px] leading-[100px]'>I Offer.</span></h1>

                        <img src={logoimg} alt="" className='w-45 ' />


                        <p className='text-[24px] text-[rgba(255,255,255,0.4)] mt-[50px] ' >
                            Providing design services for last 8 years <br />
                            with trust and love.
                        </p>


                        <div className=" mt-50 bg-[#FF6F0F] w-60 h-60 rounded-full flex flex-col justify-center items-center text-black relative">

                            <p className="text-2xl font-bold "><span className='text-sm font-medium'> LET’S </span><br />EXPLORE<br />ALL.</p>
                            <div className="absolute -bottom-4 -right-4 w-25 h-25  flex items-center justify-center shadow-md">
                                <img src={logoimg2} alt="Arrow" className="" />
                            </div>
                        </div>
                    </div>


                    <div className='mt-30 pb-[255px]'>

                        {/* Service 1 */}
                        <div className="flex items-start gap-12 leading-14">
                            <img src={logoimg3} alt="" className="w-[99px] h-[95px] leading-[64px]" />

                            <div>
                                <h1 className="text-white text-[54px]">
                                    Web & UI/UX <br /> Design.
                                </h1>
                                <div className="flex items-center gap-170 mt-6  ">
                                    <small className="text-gray-400 text-base">Explore More</small>
                                  <button className="w-[80px] h-[80px] flex items-center justify-center rounded-full hover:bg-orange-500 transition cursor-pointer ">
                                        <img src={arrow} alt="Arrow 3" className="w-[80px] h-[80px]  " />
                                    </button>
                                </div>


                            </div>


                        </div>
                        <div className='border-b border-[rgba(255,255,255,0.08)] mt-6'></div>







                        {/* Service 2 */}
                        <div className="flex  gap-12 leading-14 items-start mt-26">
                            <img src={logoimg5} alt="" className="w-[103px] h-[103px]" />
                            <div>
                                <h1 className="text-white text-[54px] leading-[64px] ">
                                    Brand & Product <br /> Design.
                                </h1>
                                <div className=" flex gap-170 mt-6 ">
                                    <small className="text-gray-400 text-base">Explore More</small>

                                  <button className="w-[80px] h-[80px] flex items-center justify-center rounded-full hover:bg-orange-500 transition cursor-pointer ">
                                        <img src={arrow} alt="Arrow 3" className="w-[80px] h-[80px]  " />
                                    </button>
                                </div>

                               
                                
                            </div>
                        </div>

                        <div className='border-b border-[rgba(255,255,255,0.08)] mt-6'></div>


                        <div className='flex gap-12 leading-14 items-start mt-26'>
                            <img src={logoimg4} alt="" className="w-[90px] h-[114px]" />

                            <div>


                                <h1 className="text-white text-[54px]  leading-[64px] ">
                                    Mobile App <br /> Design.
                                </h1>




                                <div className="flex  gap-170">

                                    <small className="text-gray-400 text-base mt-[40px]">Explore More</small>
                                    <button className="w-[80px] h-[80px] flex items-center justify-center rounded-full hover:bg-orange-500 transition cursor-pointer ">
                                        <img src={arrow} alt="Arrow 3" className="w-[80px] h-[80px]  " />
                                    </button>
                                </div>


                              

                            </div>




                        </div>


                        <div className='border-b border-[rgba(255,255,255,0.08)] mt-6'></div>

                    </div>
                </div>
            </div>



            <img src={work} alt="" className='absolute w-full bottom-[-111px] ' />

        </div>




    );
};

export default Service;