import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;

const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_19_2294)">
    <path d="M21.4247 5.40865C23.3524 7.33614 24.455 9.93779 24.4992 12.6635C24.5434 15.3891 23.5258 18.0252 21.6616 20.0142L21.4247 20.2591L16.4746 25.2081C15.8465 25.8359 15.0033 26.2013 14.1157 26.2306C13.2282 26.2598 12.3628 25.9506 11.6947 25.3657L11.5267 25.2081L6.5754 20.258C4.60625 18.2888 3.5 15.6181 3.5 12.8333C3.5 10.0485 4.60625 7.37779 6.5754 5.40865C8.54454 3.43951 11.2153 2.33325 14.0001 2.33325C16.7849 2.33325 19.4556 3.43951 21.4247 5.40865ZM14.0001 9.33332C13.5404 9.33332 13.0853 9.42385 12.6607 9.59974C12.236 9.77563 11.8502 10.0334 11.5252 10.3584C11.2002 10.6834 10.9424 11.0693 10.7665 11.4939C10.5906 11.9186 10.5001 12.3737 10.5001 12.8333C10.5001 13.2929 10.5906 13.7481 10.7665 14.1727C10.9424 14.5973 11.2002 14.9832 11.5252 15.3082C11.8502 15.6332 12.236 15.891 12.6607 16.0669C13.0853 16.2428 13.5404 16.3333 14.0001 16.3333C14.9283 16.3333 15.8186 15.9646 16.4749 15.3082C17.1313 14.6518 17.5001 13.7616 17.5001 12.8333C17.5001 11.9051 17.1313 11.0148 16.4749 10.3584C15.8186 9.70206 14.9283 9.33332 14.0001 9.33332Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_19_2294">
      <rect width="28" height="28" fill="white" />
    </clipPath>
  </defs>
</svg>

const IntroSection = () => {
  const { lang } = useSelector((state) => state.localiztion);
  const { localization } = Content[lang];


  const datas = [
    {
      title: "Intrax",
      subtitle: "San-Francisco. California",
      info: "600 California Street10th FloorSan Francisco, CA 94108",
    },
 
]

  return (
    <section >
      <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  flex lg:flex-nowrap flex-wrap'>
        <div className="w-full min-h-[496px]  lg:h-[496px] flex flex-col justify-between p-[40px] pb-[66px] rounded-[32px] bg-[url(/assets/images/png/partners-bg.png)] bg-center bg-cover bg-no-repeat">
          <div className=" border-[#EBECF1] border-b-[1px] pb-[32px]   flex-wrap gap-[15px]  flex justify-between w-full">
            <h3 className="font-[700] text-[#FFFFFF] uppercase">{localization.home.partners.title}</h3>
            <p className="font-[500] text-[#FFFFFF] w-[520px]">{localization.home.partners.subtitle}</p>
          </div>  
      
          <div className='text-[#ffffff] flex  justify-center items-center md:pt-0 pt-[30px]'>
           
            {datas && datas.map((item, index) => (<div className='flex gap-[40px] sm:flex-row flex-col' key={index}>
              <h3 className="font-[700] text-[30px] md:text-[50px] font-oswald uppercase">{item.title}</h3>
              <div className="flex gap-[12px] border-t-[1.5px] sm:border-t-0 sm:border-l-[1.5px] pt-[20px] sm:pl-[20px] border-[rgba(235,236,241,0.40)] ">
                {locationIcon}
                <div>
                  <h4 className="font-[700] text-[18px]">{item.subtitle}</h4>
                  <p >{item.info}</p>
                </div>
              </div>
            </div>))}
          
          </div>
        </div>
      </div>

    </section>
  );
};

export default IntroSection;
