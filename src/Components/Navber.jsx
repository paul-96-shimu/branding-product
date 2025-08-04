import React from 'react';

import logo from '../assets/P.svg'
import logo2 from '../assets/Potu.svg'
import { FaArrowUp } from "react-icons/fa6";

const Navber = () => {
    return (
        <div className="navbar mb-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-2xl">
            <li><a>Home</a></li>
            <li><a>Work</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
       <div className='flex gap-3.5'>
         <img src={logo } alt=""  className='bg-black p-4' />
        <img src={logo2} alt="" className='bg-white' />
       </div>
       
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl flex gap-6 text-[#141414]">
          <li><a>Home</a></li>
          <li><a>Work</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn rounded-full text-xl">Let’s Talk <FaArrowUp   className="ml-2 rotate-45"  /></a>
      </div>
    </div>
    );
};

export default Navber;