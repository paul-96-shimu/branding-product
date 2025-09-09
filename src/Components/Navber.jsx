import React, { useState } from 'react';
import logo from '../assets/P.svg';
import logo2 from '../assets/Potu.svg';
import logo3 from '../assets/NAv.svg';
import logo4 from '../assets/navber item bg img.png';
import { FaArrowUp } from "react-icons/fa6";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Work", "About", "Contact"];

  return (
    <div className="navbar mb-30 w-[1803px] mx-auto relative font-face ">
      {/* Navbar start */}
      <div className="navbar-start flex items-center gap-3.5">
        <img src={logo} alt="" className="bg-black p-4" />
        <img src={logo2} alt="" className="bg-white" />
      </div>

      {/* Desktop horizontal menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl flex gap-6 text-[#141414] family">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group hover:bg-transparent">
              <a className="font-satoshi relative hover:bg-transparent">
                {item}
                <div className="absolute w-full h-full top-[-30px] left-[-30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img className="w-full min-w-[167px]" src={logo4} alt="" />
                </div>




                {/* <div className="absolute inset-0 -top-2 -left-2 -right-2 -bottom-2 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={logo4} alt="" className="w-full h-full object-contain" />
                </div> */}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end flex items-center gap-4 relative">
        <button className="btn btn-outline rounded-full family flex items-center gap-2">
          Let’s Talk <FaArrowUp className="rotate-45" />
        </button>

        {/* Menu button always visible */}
        <div className="relative">
          <img
            src={logo3}
            alt="menu"
            className="cursor-pointer w-[71px] h-[50px]"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Mobile dropdown menu */}
          <ul className={`menu menu-sm dropdown-content  rounded-box z-40 mt-2 w-52 p-2 shadow text-2xl absolute right-0 top-full transition-all duration-300
            ${menuOpen ? 'block' : 'hidden'} lg:hidden`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">
                <a className="flex items-center justify-between relative">
                  {item}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 w-40 sm:w-52">
                    <img src={logo4} alt="" className="w-full object-contain" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
