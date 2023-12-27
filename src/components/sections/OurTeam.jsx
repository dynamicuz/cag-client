import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const OurTeamSection = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = [
        {
            img: "/assets/images/png/team-1.png",
            title: "Нуржан Букетов",
            subtitle:"Директор CAG Work&Travel"
        },
        {
            img: "/assets/images/png/team-1.png",
            title: "Жамиля Куатбек",
               subtitle: "Координатор вг. Алматы"
        },
        {
            img: "/assets/images/png/team-1.png",

            title: "Анель Жанаева",
            subtitle: "Координатор вг. Астана",
        },
        {
            img: "/assets/images/png/team-1.png",

            title: "Дурбек Таиров",
            subtitle: "Координатор вг. Шымкент",
        },
      ]


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full   flex-wrap gap-[15px]">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.ourteam.title}</h3>
                    <p className="font-[500] text-[#00032E] font-inter max-w-[670px]">{localization.home.ourteam.subtitle}</p>
                </div>  
                <div className="flex items-end w-full gap-[40px] pt-[56px] pb-[80px] ">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 text-[#00032E] gap-[20px] w-full   ">

                        {data && data?.map((item, index) => (<div className='flex flex-col w-full ' key={index}>
                            <Image src={item.img} alt={item.title} width={325} height={413} className='w-full h-[350px] md:h-auto' />
                            <h3 className="font-[600] font-oswald text-[24px] text-[#00032E]  pt-[16px] pb-[8px] uppercase">{item.title}</h3>
                            <p className="font-inter text-[18px] text-[#7F8698]">{item.subtitle}</p>
                        </div>))}    
                  
                        
</div>
                </div>
                  
            <button className="mx-auto border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full py-[16px] px-[24px] font-[500] text-[20px] text-[#00032E]">{localization.header.btn}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33_5477)">
                        <path d="M5 12H19" stroke="#00031A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 18L19 12" stroke="#00031A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 6L19 12" stroke="#00031A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_33_5477">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
                

            </div>

        </section>
    );
};

export default OurTeamSection;
