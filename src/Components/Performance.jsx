import React from 'react';

import image from '../assets/Bg.png'

import image1 from '../assets/orange circleImage.png'

import image0 from '../assets/double-quote-left.png'

import image2 from '../assets/black Ellipse 881.png'

import image3 from '../assets/Vector 1234 underline.png'

// import image4 from '../assets/Slider Button orange.png'
import image5 from '../assets/image 2495@2x.png'
import image6 from '../assets/Text Shape.png'
import shape from '../assets/Shape 4444.svg';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



const Performance = () => {
    return (








        <div className='relative'



            style={{

                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}>


            <div className="carousel w-full">


                {/* slider 1 */}
                {/* <div id="slide1" className="carousel-item relative w-full">

                    <div className="flex items-center gap-12 container mx-auto pb-86 pt-35">
                  
                        <div className="relative shrink-0  w-[660px] h-[804px]">
                 
                            <img src={image5} alt="" className="w-[960px] h-[804px]" />

                   
                            <img
                                src={image1}
                                alt=""
                                className="absolute top-20 left-20 w-[600px] h-[600px]"
                            />

                      
                            <div className="absolute bottom-5 left-10">
                             
                                <img src={image2} alt="" className="w-[270px] h-[270px]" />

                                <img
                                    src={image0}
                                    alt=""
                                    className="absolute top-20 left-20 w-[91px] h-[99px]"
                                />
                            </div>





                        </div>

                        ===== Right Side (Text Content) =====
                        <div className="text-right">
                            <div>
                                <img src={shape} alt="" className='w-[86px] h-[89px]' />
                                <h1>slider1</h1>
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

                                <div className="">
                                    <a href="#slide4" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                                    <a href="#slide2" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                                </div>
                            </div>


                        </div>


                        <img src={image6} alt="" className='absolute  right-[-10px] bottom-[-70px] px-10 ' />

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>



                </div> */}


                {/* slide2 */}


                <div id="slide2" className="carousel-item relative w-full">
                    <div id="slide1" className="carousel-item relative w-full">
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
                                    <img src={shape} alt="" className='w-[86px] h-[89px]' />

                                   

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

                                    {/* <div>
                                        <button>  <img src={image4} alt="" className='mt-16' /></button>
                                    </div> */}


                                    <div className="">
                                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500">   <FaLongArrowAltRight className="w-5 h-5 text-black" /> </a>
                                        <a href="#slide3" className="btn btn-circle  hover:bg-orange-500">     <FaLongArrowAltLeft className="w-5 h-5 text-black" /></a>

                                    </div>


                                    {/* <div className="">
                                        <a href="#slide1" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                                        <a href="#slide3" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                                    </div> */}


                                    {/* 
                                    <div className="">
                                        <a href="#slide4" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                                        <a href="#slide2" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                                    </div> */}
                                </div>


                            </div>


                            <img src={image6} alt="" className='absolute  right-[-10px] bottom-[-70px] px-10 ' />

                        </div>

                        {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div> */}



                    </div>
                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div> */}



                </div>

                {/* slide3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div id="slide1" className="carousel-item relative w-full">
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
                                    <img src={shape} alt="" className='w-[86px] h-[89px]' />

                                   
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
                                        {/* <button>  <img src={image4} alt="" className='mt-16' /></button> */}


                                        <div className="">
                                            <a href="#slide3" className="btn btn-circle hover:bg-orange-500">   <FaLongArrowAltRight className="w-5 h-5 text-black" /> </a>
                                            <a href="#slide2" className="btn btn-circle  hover:bg-orange-500">     <FaLongArrowAltLeft className="w-5 h-5 text-black" /></a>

                                        </div>

                                    </div>
                                </div>


                            </div>


                            <img src={image6} alt="" className='absolute  right-[-10px] bottom-[-70px] px-10 ' />

                        </div>

                        {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div> * */}



                    </div>
                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div> */}

                    {/* 
                    <div className="">
                        <a href="#slide2" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                        <a href="#slide4" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                    </div> */}

                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div id="slide1" className="carousel-item relative w-full">
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
                                    <img src={shape} alt="" className='w-[86px] h-[89px]' />
                                
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



                                    <div className='flex justify-end gap-80'>


                                        <div className='flex items-center gap-6 mt-16 '>
                                            <img src={image3} alt="" />


                                            <h6 className='text-black

                       '>01/  <span className='text-gray-500'>03</span></h6>



                                        </div>
                                        <div>
                                            {/* <button>  <img src={image4} alt="" className='mt-16' /></button> */}


                                            <div className="">
                                                <a href="#slide4" className="btn btn-circle hover:bg-orange-500">   <FaLongArrowAltRight className="w-5 h-5 text-black" /> </a>
                                                <a href="#slide2" className="btn btn-circle  hover:bg-orange-500">     <FaLongArrowAltLeft className="w-5 h-5 text-black" /></a>

                                            </div>

                                        </div>
                                    </div>


                                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div> */}






                                </div>


                            </div>




                        </div>
                        {/* 
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div> */}


                        {/* <div className="">
                            <a href="#slide4" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                            <a href="#slide2" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                        </div> */}

                    </div>
                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div> */}

                    {/* <div className="">
                        <a href="#slide3" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>
                        <a href="#slide1" className="btn btn-circle">  <img src={image4} alt="" className='mt-16' /></a>

                    </div> */}

                </div>
            </div> *





        </div>










    );
};

export default Performance;






