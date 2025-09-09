import React, { useState } from 'react';
import logoimg from '../assets/image 2507.svg';
// import prearrow from '../assets/Prev.svg';
// import nextarrow from '../assets/Next.svg';
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";

const Instagram = () => {
    const [offset, setOffset] = useState(0);

    const cardWidth = 446;
    const visibleCards = 3;
    const totalCards = 6;

    const containerWidth = cardWidth * visibleCards;
    const lastOffset = -(cardWidth * totalCards - containerWidth);

    const handlePrev = () => {
        setOffset(prev => Math.min(prev + cardWidth, 0));
    };

    const handleNext = () => {
        setOffset(prev => Math.max(prev - cardWidth, lastOffset));
    }

    const cards = Array.from({ length: totalCards }, (_, i) => (
        <div key={i} className="bg-[#E6E6E6] w-[440px] h-[480px] shrink-0"></div>
    ));

    return (
        <div className="bg-white">
            <div className="px-10 py-20 flex items-start justify-between mb-8 overflow-hidden mt-16 gap-40">
                {/* Left Text Section */}
                <div className="flex flex-col pl-30">
                    <div className='r'>
                        <h2 className="text-[90px] font-bold text-black leading-[100px]">Instagram</h2>
                        <h3 className="text-[90px] text-[rgba(0,0,0,0.4)] font-semibold mt-1 leading-[100px]">@rakir.</h3>
                        <img src={logoimg} alt="" className="w-[269px] h-[79px] leading-[100px] rotate-0" />
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-8 items-center mt-10">
                        {/* Prev button */}
                        <button
                            onClick={handlePrev}
                            className="flex items-center justify-center 
               hover:bg-black hover:text-white 
               transition duration-300 
               rounded-full border border-black 
               w-[100px] h-[100px] text-[40px]"
                        >
                            <MdOutlineArrowBack />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={handleNext}
                            className="flex items-center justify-center 
               hover:bg-black hover:text-white 
               transition duration-300 
               rounded-full border border-black 
               w-[100px] h-[100px] text-[40px]"
                        >
                            <MdArrowForward />
                        </button>
                    </div>

                </div>

                {/* Right Grid Section */}
                <div className="overflow-hidden" style={{ width: `${cardWidth * visibleCards}px` }}>
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;
