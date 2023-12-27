import {  useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const IntroSection = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const {localization}  = Content[lang];
   

    return (
        <section className="pt-[80px] md:pt-0">
            <div className=' max-w-[1440px] w-full mx-auto px-[20px] lg:px-[40px]  flex lg:flex-nowrap flex-wrap'>
                <div className="w-full p-[20px] md:p-[40px] rounded-[32px] bg-[url(/assets/images/png/intro-bg.png)] bg-center bg-cover bg-no-repeat">
                    <h1 className="font-[700] text-[#fff] uppercase text-[30px] lg:text-[65px] font-oswald">{localization.home.intro.title }</h1>
                    <p className="text-[#fff] text-[20px] max-w-[600px] mt-[8px] mb-[24px]">{localization.home.intro.subtitle} <b>{localization.home.intro.workandtravel}</b></p>
                    <button className='px-[60px] p-[16px] md:px-[201px] bg-[#fff] rounded-full text-[#000] text-[20px] mt-[40px] font-[500]'>{localization.home.intro.btn}</button>

                    <div className="flex flex-wrap md:flex-nowrap items-center gap-[20px] md:gap-[40px] text-[#fff] mt-[148px]">
                        <a className='text-[18px] font-[500] text-[#fff] flex gap-[8px]' href="https://instagram.com/caguzbekistan?igshid=NzZlODBkYWE4Ng=="><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_14_2161)">
                                <path d="M4.66797 9.33329C4.66797 8.09562 5.15963 6.90863 6.0348 6.03346C6.90997 5.15829 8.09696 4.66663 9.33464 4.66663H18.668C19.9056 4.66663 21.0926 5.15829 21.9678 6.03346C22.843 6.90863 23.3346 8.09562 23.3346 9.33329V18.6666C23.3346 19.9043 22.843 21.0913 21.9678 21.9665C21.0926 22.8416 19.9056 23.3333 18.668 23.3333H9.33464C8.09696 23.3333 6.90997 22.8416 6.0348 21.9665C5.15963 21.0913 4.66797 19.9043 4.66797 18.6666V9.33329Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.5 14C10.5 14.9283 10.8687 15.8185 11.5251 16.4749C12.1815 17.1313 13.0717 17.5 14 17.5C14.9283 17.5 15.8185 17.1313 16.4749 16.4749C17.1313 15.8185 17.5 14.9283 17.5 14C17.5 13.0717 17.1313 12.1815 16.4749 11.5251C15.8185 10.8687 14.9283 10.5 14 10.5C13.0717 10.5 12.1815 10.8687 11.5251 11.5251C10.8687 12.1815 10.5 13.0717 10.5 14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.25 8.75V8.76286" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_14_2161">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
Instagram</a> |
                        <a className='text-[18px] font-[500] text-[#fff] flex gap-[8px]' href="https://t.me/CAG_UZ"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_14_2168)">
                                <path d="M17.5 11.6666L12.8333 16.3333L19.8333 23.3333L24.5 4.66663L3.5 12.8333L8.16667 15.1666L10.5 22.1666L14 17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_14_2168">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
Telegram</a>
                    </div>
                </div>
                          </div>
      
        </section>
    );
};

export default IntroSection;
