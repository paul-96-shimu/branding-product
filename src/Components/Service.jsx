import React from 'react';

import logoimg from '../assets/image 2507.svg'
import logoimg2 from '../assets/SHape Arrow.svg'
import logoimg3 from '../assets/Icon.svg'
import logoimg4 from '../assets/obile.svg'
import logoimg5 from '../assets/book.svg'
import arrow from '../assets/Arrow (1).svg'
import arrow2 from '../assets/orange.svg'


const Service = () => {
    return (
        <div className='bg-[#141414] flex  items-start justify-evenly  py-20 px-20'>


            {/* 1st grid */}
            <div>
                <h1 className=''> <span className='text-white text-6xl '>Service That </span> <br />
                    <span className='text-gray-400  text-6xl'>I Offer.</span></h1>

                <img src={logoimg} alt="" className='w-45
                    ' />

                <p className='text-sm text-gray-600 mt-12'>
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







            <div>


          



                 <div className="flex gap-6 items-start">
                      <img src={logoimg3} alt="" className="w-15" />

                    <div>
                        <h1 className="text-white text-[54px] leading-tight">
                           Web & UI/UX <br /> Design.
                        </h1>
                        <div className="flex items-center gap-50 mt-6  justify-between">
                            <small className="text-gray-400 text-base">Explore More</small>
                            <img src={arrow2} alt="Arrow" className="w-[80px] h-[80px] p-1" />
                        </div>
                    </div>
                </div>




                {/* Service 2 */}
                <div className="flex gap-6 items-start">
                    <img src={logoimg5} alt="" className="w-15" />
                    <div>
                        <h1 className="text-white text-[54px] leading-tight">
                            Brand & Product <br /> Design.
                        </h1>
                        <div className="flex items-center gap-50 mt-6">
                            <small className="text-gray-400 text-base">Explore More</small>
                            <img src={arrow} alt="Arrow 3" className="w-[80px] h-[80px] " />
                        </div>
                    </div>
                </div>










                <div className="flex gap-6 items-start w-full">
                    <img src={logoimg4} alt="" className="w-15" />
                    <div>
                        <h1 className="text-white text-[54px] leading-tight">
                            Mobile App <br /> Design.
                        </h1>
                        <div className="flex items-center gap-50 mt-6 justify-between">
                            <small className="text-gray-400 text-base">Explore More</small>
                            <img src={arrow} alt="Arrow 3" className="w-[80px] h-[80px] " />
                        </div>
                    </div>
                </div>



            </div>
        </div>







    );
};

export default Service;