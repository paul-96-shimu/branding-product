import React from 'react';
import logoimg from '../assets/image 2507.svg'
// import logoimg2 from '../assets/round arrow.svg'
import { GoArrowUpRight } from "react-icons/go";

const Experience = () => {
    return (
        <div >
            <div className=' container mx-auto  mt-55'>
                <div className='flex justify-between  items-center'>

                    <div  className="relative inline-block">
                        <h2 className='font-medium'>
                            <span className='text-[#000] text-[90px]  '>My Experience </span> <br />
                            <span className='text-[rgba(0,0,0,0.4)] text-[90px] mt-4  leading-[110px]'>& Skills.</span>

                            <img src={logoimg} alt="" className='absolute top-50 w-[311px] h-[79px] rotate-0' />

                        </h2>
                    </div>


                    <button className='flex items-center gap-4  hover:bg-black hover:text-white transition duration-300 rounded-full border border-black  text-[40px] pt-[73px] 
                    pb-[73px] pl-[76px] pr-[70px] '>

                     <GoArrowUpRight />
                    </button>

                </div>





                {/* experience part */}

                <div className=' flex items-center'>
                    <div>
                        <div>
                            <div>
                                <h3 className='text-black text-4xl font-medium leading-[100px] mt-25'>Experience </h3>
                                <div className='border '>  </div>
                            </div>

                            <div className=' grid grid-cols-3 mt-12  gap-70 items-center justify-center'>
                                <small className=' text-xl font-normal  whitespace-nowrap'>
                                    2019 - Present
                                </small>
                                <div  className='whitespace-nowrap'>
                                    <h4 className='text-[28px] text-black font-medium'> Product Designer</h4>

                                    <small className='text-[rgba(0,0,0,0.35)] text-[20px] font-normal'>
                                        Amazon Inc
                                    </small>
                                </div>

                                <p className='text-[rgba(0,0,0,0.35)] font-thin text-[80px]'>01</p>
                            </div>

                        </div>







                        <div>

                            <div className='border '>  </div>
                        </div>

                        <div className=' grid grid-cols-3  gap-70 mt-12 items-center justify-center'>
                            <small className=' text-xl font-normal  whitespace-nowrap'>
                                2011 - 2014
                            </small>
                            <div  className='whitespace-nowrap'>
                                <h4 className='text-[28px] text-black font-medium'> Art & Design Director</h4>

                                <small className='text-[rgba(0,0,0,0.35)] text-[20px] font-normal'>
                                    Blue Orizon Inc
                                </small>
                            </div>

                            <p className='text-[rgba(0,0,0,0.35)] font-thin  text-[80px]'>02</p>
                        </div>





                        <div>

                            <div className='border mt-12'>  </div>
                        </div>




                        <div className=' grid grid-cols-3 gap-70 mt-12 items-center justify-center'>
                            <small className=' text-xl font-normal  whitespace-nowrap'>
                                2011 - 2014
                            </small>
                            <div  className='whitespace-nowrap'>
                                <h4 className='text-[28px] text-black font-medium'> Senior Designer</h4>

                                <small className='text-[rgba(0,0,0,0.35)] text-[20px] font-normal'>
                                    Artilo Inc.
                                </small>
                            </div>

                            <p className='text-[rgba(0,0,0,0.35)] font-thin  text-[80px]'>03</p>
                        </div>


                        <div className='border mt-12'>  </div>






                        {/* skill part */}

                        <div className='text-bold text-black text-4xl mt-30'>

                            <h4 className='text-[#000] text-4xl font-medium'>Skills</h4>
                        </div>


                        <div className='mt-16'>
                            <button type="button" class="text-white bg-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Great Interfac</button>
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Mobile App</button>
                            <button type="button" class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Marketing</button>
                            <button type="button" class="text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">UI/UX Design</button>
                        </div>

                        <br />
                    
                            <button type="button" class="text-white bg-black hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">UI/UX</button>
                            <button type="button" class="text-white bg-black hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Product Design</button>
                            <button type="button" class="text-white bg-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">UI/UX Design</button> & more....

                       
                    </div>



                    {/* award achivment part */}
                    <div className='pl-44  pb-54  '>
                        <h3 className='text-black text-3xl mb-11 font-bold '>Award & Achivment</h3>

                        <div className='bg-[#F5F4F5] pb-9 pr-6 pl-8 pt-22 rounded-4xl '>




                            <div className=''>
                                <h2 className='text-black text-7xl font-medium'>
                                    02
                                </h2>


                            </div>



                            <div className='flex justify-between items-center w-full mt-4'>

                                <small className='text-[rgba(0,0,0,0.35)] font-normal text-[22px]'>Rising Star Designer</small>
                                <small className='text-black font-medium'>2018</small>
                            </div>
                        </div>








                        <div className='bg-[#F5F4F5] pb-9 pr-6 pl-8 pt-22 rounded-4xl mt-11 w-[574px] h-[225px]'>




                            <div className=''>
                                <h2 className='text-black text-7xl font-medium'>
                                    03
                                </h2>


                            </div>




                            <div className='flex justify-between mt-4'>
                                <small className='text-[rgba(0,0,0,0.35)] font-normal text-[22px]'>UI/UX Award winner</small>
                                <small className='text-black font-medium'>2023</small>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;