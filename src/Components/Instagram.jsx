import React, { useState } from 'react';
import logoimg from '../assets/image 2507.svg';
import prearrow from '../assets/Prev.svg';
import nextarrow from '../assets/Next.svg';

const Instagram = () => {
    const [offset, setOffset] = useState(0);

    const cardWidth = 446; // 440px + gap(6px)
    const visibleCards = 3; // একসাথে কয়টা পুরো কার্ড দেখা যাবে
    const totalCards = 4; // মোট কার্ড সংখ্যা

    const containerWidth = cardWidth * visibleCards; // container = 2 cards
    const lastOffset = -(cardWidth * totalCards - (containerWidth - cardWidth / 2));
    // => শেষ offset এ গিয়ে শুধু শেষ কার্ডটা half হবে

    const handlePrev = () => {
        setOffset((prev) => Math.min(prev + cardWidth, 0)); // 0 এর বাইরে যাবে না
    };

    const handleNext = () => {
        setOffset((prev) => Math.max(prev - cardWidth, lastOffset)); // শুধু শেষ card half দেখাবে
    };

    return (
        <div className="bg-white">
            <div className="px-10 py-20 flex items-start justify-between mb-8 overflow-hidden mt-16">
                {/* Left Text Section */}
                <div className="flex flex-col pl-30">
                    <div>
                        <h2 className="text-[90px] font-bold text-black">Instagram</h2>
                        <h3 className="text-[90px] text-[rgba(0,0,0,0.4)] font-semibold mt-1">@rakir.</h3>
                        <img src={logoimg} alt="" className="w-[269px] h-[79px]" />
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-4 mt-10">
                        <div className="flex gap-8">
                            <button onClick={handlePrev}>
                                <img src={prearrow} alt="Prev" className="w-30" />
                            </button>
                            <button onClick={handleNext}>
                                <img src={nextarrow} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Grid Section */}
                <div className="overflow-hidden w-[892px]"> {/* 2 cards * 446px */}
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        <div className="bg-[#E6E6E6] w-[440px] h-[480px] shrink-0"></div>
                        <div className="bg-[#E6E6E6] w-[440px] h-[480px] shrink-0"></div>
                        <div className="bg-[#E6E6E6] w-[440px] h-[480px] shrink-0"></div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;
