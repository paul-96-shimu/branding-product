import React from 'react';

import logo from '../assets/P.svg'
import logo2 from '../assets/Potu.svg'
import logo3 from '../assets/NAv.svg'
import logo4 from '../assets/navber item bg img.png'

import { FaArrowUp } from "react-icons/fa6";


const Navber = () => {
  return (
    <div className="navbar mb-30  container mx-auto">
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
            <li>
              <img src={logo4} alt="" className='mr-2' />
              <a>Home</a></li>
          
            <li><a>Work</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className='flex gap-3.5'>
          <img src={logo} alt="" className='bg-black p-4' />
          <img src={logo2} alt="" className='bg-white' />
        </div>

      </div>

      <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 text-2xl flex gap-6 text-[#141414] family">
          <li className='relative'>
            <a className='font-satoshi-extra'>
              <div className='mr-2 absolute w-full h-full top-[-30px] left-[-35px]'>
                <img className='w-full min-w-[167px]' src={logo4} alt="" />
              </div>
              Home
            </a>
          </li>
          <li><a className='font-satoshi'>Work</a></li>
          <li><a className='font-satoshi'>About</a></li>
          <li><a className='font-satoshi'>Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end ">

        <button className="btn   btn-outline rounded-full family">Let’s Talk <FaArrowUp className="ml-2 rotate-45 " /></button>

        <img src={logo3} alt="" className='ml-6'  />
      </div>
    </div>
  );
};

export default Navber;