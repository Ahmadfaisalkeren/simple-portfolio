import React from 'react';
import { menu, close } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex py-2 justify-between items-center navbar">      
      <div className="flex flew-row justify-between items-center w-full">
        <h4 className="flex-1 font-poppins font-normal ss:text-[62px] text-[42px] text-gradient-2 ss:leading-[90px] leading-[65px]">JDPortfolio</h4>
      </div>      
      <div className="flex items-center px-4">
        <ul class="list:none sm:flex hidden justify-start items-center flex-1">
          <li class="group">
              <a href="#home" className="font-poppins font-normal py-5 mt-5 px-5 mx-5 flex-1 text-white ss:text-[22px] text-[12px] ss:leading-[50px] leading-[15px]">Home</a>
          </li>
          <li class="group">
              <a href="#about" className="font-poppins font-normal py-5 mt-5 px-5 mx-5 flex-1 text-white ss:text-[22px] text-[12px] ss:leading-[50px] leading-[15px]">About</a>
          </li>
          <li class="group">
              <a href="#portfolio" className="font-poppins font-normal py-5 mt-5 px-5 mx-5 flex-1 text-white ss:text-[22px] text-[12px] ss:leading-[50px] leading-[15px]">Portfolio</a>
          </li>
          <li class="group">
              <a href="#contact" className="font-poppins font-normal py-5 mt-5 px-5 mx-5 flex-1 text-white ss:text-[22px] text-[12px] ss:leading-[50px] leading-[15px]">Contact</a>
          </li>          
        </ul>  
      </div>        
    </nav>
  )
}

export default Navbar