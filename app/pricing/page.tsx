"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";import { ReactNode } from 'react';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { ChangeEvent } from "react";
import RootLayout from "../layout";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Plan2 = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
  });

  useEffect(() => {
      if (inView) {
          setAnimationClass("slide-in");
      }
  }, [inView]);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  function changeCircleColor(event: ChangeEvent<HTMLInputElement>) {
    const circle = document.getElementById('circle');
    if (circle) { // Check if circle is not null
      if (event.target.checked) {
        circle.setAttribute('fill', '#FF7500');
      } else {
        circle.setAttribute('fill', 'white');
      }
    }
  }
  
  return (
    <RootLayout shoWebar={true}>
 <div> 
   <div className='flex items-center justify-center xl:h-screen  2xl:h-screen '> 
      <div className="flex flex-col max-w-[1000px] mx-auto 2xl:mt-32 xl:mt-4 mt-28 ">
    {/* heading */}
   <div className="slide-reveal flex flex-col bl:flex-row justify-between gap-y-6 gap-x-4 items-center mb-8 text-center">
  <div className="relative w-full">
    <h2 className="text-black font-mona-sans font-bold xl:text-[18px] text-[16px] 2xl:text-[22px] capitalize leading-relaxed w-full">
      Seamlessly build website
    </h2>
    <p className="xl:text-[16px] font-medium text-[14px] 2xl:text-[18px] text-[#16191C]">
      Build your website seamlessly with integrating forms, blogs, and domains to achieve the online goals.
    </p>
  </div>

  <div className="flex flex-wrap   bl:flex-nowrap items-center mx-auto justify-center gap-2 2xl:gap-5">
    <h2 className="font-mona-sans text-[10px] xl:text-[12px] 2xl:text-[14px] bl:text-base font-medium leading-normal 2xl:leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px]">
      Billed Yearly
    </h2>
    <div className="toggle-container">
  <input type="checkbox" id="toggle" className="toggle-input" />
  <label htmlFor="toggle" className="toggle-label">
    <svg
      className="toggle-svg"
      viewBox="0 0 72 34"
      fill="#00A4A6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="toggle-background"
        opacity="0.15"
        y="0.5"
        width="72"
        height="33"
        rx="16.5"
        fill="#16191C"
      />
      <circle className="toggle-circle" cx="17.5" cy="17" r="10.5" fill="white" />
    </svg>
  </label>
</div>
    <h2 className="font-mona-sans text-[10px] xl:text-[12px] 2xl:text-[14px] bl:text-base font-medium leading-normal 2xl:leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px]">
      Billed Monthly
    </h2>
  </div>
</div>

    {/* cards */}
    <section className="mt-2 2xl:mt-4 px-4 2xl:px-0 " ref={ref}>
      <div className="flex flex-col gap-8 max-w-[1000px] xl:flex-row md:flex-row lg:flex-row 2xl:flex-row w-full justify-center items-center" >
  <div className="slide-item shad  duration-300 ease-in-out transform hover:scale-105  hover:brightness-110 hover:shadow-[#00A4a6] hover:shadow-md mb-5 max-h-[588px] h-full max-w-[300px] w-full transition-all bg-white border border-[#DBDBDB] hover:bg-[#00A4A6] px-10 rounded-2xl group">
    <div className="pt-10 flex flex-col w-full 2xl:space-y-6 group">
      <h2 className="font-mona-sans text-center mx-auto text-gray-900 xl:text-[18px] text-[16px] 2xl:text-[20px] font-medium group-hover:text-white">
        Form integration
      </h2>
      <div className="leading-9 text-center text-[22px] xl:text-[34px] 2xl:text-[64px] font-extrabold font-mono-sans-serif text-black group-hover:text-white 2xl:mb-2">
        $14
      </div>
      <p className="font-mona-sans text-[12px] 2xl:text-[14px]  font-normal leading-21 text-center w-full opacity-45 group-hover:text-white text-[#747474]">
        per user, per month
      </p>
    </div>

    <div className="mt-6 items-center justify-center group mx-auto">
    <div className="group mx-auto cursor-pointer max-w-[123px] 2xl:max-w-[223px] h-[28px] xl:h-[42px] 2xl:h-[52px] group-hover:text-white text-black text-xl rounded-xl group-hover:bg-white ring-1 group-hover:ring-white ring-[#00A4A6] transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center">
        <h4 className="text-[#00A4A6] font-mona-sans font-bold text-base leading-[19.2px]">Subscribe</h4>
      </div>
      <div className="border-2 border-b mt-6 group-hover:border-white max-w-[100px] mb-4 border-black items-center justify-center mx-auto" />
      <div className="flex flex-col justify-center max-w-[201px] mt-4 group mx-auto">
        <h3 className="text-[14px] font-light mb-7 text-center leading-7.5 text-black group-hover:text-white">
          Customizable form field
          <br />
          Spam protection and security
          <br />
          Data collection and storage
          <br />
          Integration with email services
          <br />
          Form submission notifications
          <br />
          Unlimited leads
          <br />
          File upload support
          <br />
          Analytics and reporting
          <br />
          Multi-page forms
        </h3>
      </div>
    </div>
  </div>

  <div className="slide-item shad  duration-300 ease-in-out transform hover:scale-105  hover:brightness-110 hover:shadow-[#00A4a6] hover:shadow-md mb-5 max-h-[588px] h-full max-w-[300px] w-full transition-all bg-white border border-[#DBDBDB] hover:bg-[#00A4A6] px-10 rounded-2xl group">
    <div className="pt-10 flex flex-col w-full 2xl:space-y-6 group">
      <h2 className="font-mona-sans text-center mx-auto text-gray-900 xl:text-[18px] text-[16px] 2xl:text-[20px] font-medium group-hover:text-white">
        Form integration
      </h2>
      <div className="leading-9 text-center text-[22px] xl:text-[34px] 2xl:text-[64px] font-extrabold font-mono-sans-serif text-black group-hover:text-white 2xl:mb-2">
        $14
      </div>
      <p className="font-mona-sans text-[12px] 2xl:text-[14px]  font-normal leading-21 text-center w-full opacity-45 group-hover:text-white text-[#747474]">
        per user, per month
      </p>
    </div>

    <div className="mt-6 items-center justify-center group mx-auto">
    <div className="group mx-auto cursor-pointer max-w-[123px] 2xl:max-w-[223px] h-[28px] xl:h-[42px] 2xl:h-[52px] group-hover:text-white text-black text-xl rounded-xl group-hover:bg-white ring-1 group-hover:ring-white ring-[#00A4A6] transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center">
        <h4 className="text-[#00A4A6] font-mona-sans font-bold text-base leading-[19.2px]">Subscribe</h4>
      </div>
      <div className="border-2 border-b mt-6 group-hover:border-white max-w-[100px] mb-4 border-black items-center justify-center mx-auto" />
      <div className="flex flex-col justify-center max-w-[201px] mt-4 group mx-auto">
        <h3 className="text-[14px] font-light mb-7 text-center leading-7.5 text-black group-hover:text-white">
          Customizable form field
          <br />
          Spam protection and security
          <br />
          Data collection and storage
          <br />
          Integration with email services
          <br />
          Form submission notifications
          <br />
          Unlimited leads
          <br />
          File upload support
          <br />
          Analytics and reporting
          <br />
          Multi-page forms
        </h3>
      </div>
    </div>
  </div>


  <div className="slide-item shad  duration-300 ease-in-out transform hover:scale-105  hover:brightness-110 hover:shadow-[#00A4a6] hover:shadow-md mb-5 max-h-[588px] h-full max-w-[300px] w-full transition-all bg-white border border-[#DBDBDB] hover:bg-[#00A4A6] px-10 rounded-2xl group">
    <div className="pt-10 flex flex-col w-full 2xl:space-y-6 group">
      <h2 className="font-mona-sans text-center mx-auto text-gray-900 xl:text-[18px] text-[16px] 2xl:text-[20px] font-medium group-hover:text-white">
        Form integration
      </h2>
      <div className="leading-9 text-center text-[22px] xl:text-[34px] 2xl:text-[64px] font-extrabold font-mono-sans-serif text-black group-hover:text-white 2xl:mb-2">
        $14
      </div>
      <p className="font-mona-sans text-[12px] 2xl:text-[14px]  font-normal leading-21 text-center w-full opacity-45 group-hover:text-white text-[#747474]">
        per user, per month
      </p>
    </div>

    <div className="mt-6 items-center justify-center group mx-auto">
    <div className="group mx-auto cursor-pointer max-w-[123px] 2xl:max-w-[223px] h-[28px] xl:h-[42px] 2xl:h-[52px] group-hover:text-white text-black text-xl rounded-xl group-hover:bg-white ring-1 group-hover:ring-white ring-[#00A4A6] transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center">
        <h4 className="text-[#00A4A6] font-mona-sans font-bold text-base leading-[19.2px]">Subscribe</h4>
      </div>
      <div className="border-2 border-b mt-6 group-hover:border-white max-w-[100px] mb-4 border-black items-center justify-center mx-auto" />
      <div className="flex flex-col justify-center max-w-[201px] mt-4 group mx-auto">
        <h3 className="text-[14px] font-light mb-7 text-center leading-7.5 text-black group-hover:text-white">
          Customizable form field
          <br />
          Spam protection and security
          <br />
          Data collection and storage
          <br />
          Integration with email services
          <br />
          Form submission notifications
          <br />
          Unlimited leads
          <br />
          File upload support
          <br />
          Analytics and reporting
          <br />
          Multi-page forms
        </h3>
      </div>
    </div>
  </div>

      </div>
     
    </section>
    
   



  </div>
  </div>
  </div> 
  </RootLayout>
  )
}

export default Plan2