import React, { useState } from 'react';
import Container from './Container';
import logo from "../assets/Logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';  // For the hamburger menu

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section
    className="py-5"
    style={{
      background: 'linear-gradient(to right, rgb(181, 186, 205) 5%,  rgb(254, 195, 95)100%)',
    }}
  >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="w-[20%] sm:w-[30%] md:w-[20%]">
            <img src={logo} alt="Logo" className="lg:w-[30%] w-full" />
          </div>

          {/* Menu Section */}
          <div className="hidden sm:flex w-[50%] justify-around">
            <ul className='flex justify-between gap-9'>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                Home <RiArrowDownSLine className='text-[25px]' />
              </li>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                About <RiArrowDownSLine className='text-[25px]' />
              </li>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                Service <RiArrowDownSLine className='text-[25px]' />
              </li>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                Pages <RiArrowDownSLine className='text-[25px]' />
              </li>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                News <RiArrowDownSLine className='text-[25px]' />
              </li>
              <li className='flex items-center gap-1 text-[18px] text-[#29313D] font-Poppins font-medium hover:text-[#8454F5] cursor-pointer'>
                Log in <RiArrowDownSLine className='text-[25px]' />
              </li>
              
            </ul>
          </div>

          {/* Log in and Consultation Button Section */}
          <div className="hidden sm:flex w-[20%] justify-between">
           
            <button className="relative group h-[50px] w-[180px] text-[#FFFF] font-Inter font-bold  outline-none rounded-lg bg-[#8454F5] overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute top-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
            </button>
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-5`}>
          <ul className="flex flex-col items-center space-y-4">
            <li className="text-white font-Poppins text-lg hover:text-[#8454F5] cursor-pointer">Home</li>
            <li className="text-white font-Poppins  text-lg hover:text-[#8454F5] cursor-pointer">About</li>
            <li className="text-white font-Poppins  text-lg hover:text-[#8454F5] cursor-pointer">Service</li>
            <li className="text-white font-Poppins  text-lg hover:text-[#8454F5] cursor-pointer">Pages</li>
            <li className="text-white font-Poppins  text-lg hover:text-[#8454F5] cursor-pointer">News</li>
            <li className="text-white font-Poppins  text-lg hover:text-[#8454F5] cursor-pointer">Log in</li>
            <li>
              <button className="py-2 px-5 bg-[rgba(0,0,0,0.2)] rounded-lg text-[16px] text-[#FFF] font-Poppins font-semibold hover:bg-[#8454F5] transition-colors duration-300">
                Free Consultation
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Navber;
