import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const ServiseSection = ({ setIsOpen }) => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = {
        ru: [
            {
                icon: "🦸‍♂️",
                title: "01. LIFEGUARD-спасатель",
                subtitle: "Одна из популярныхнаправлений"
            },
            {
                icon: "👨‍🍳",
                title: "02. Помощник повара, официант",
                subtitle: "Работник фаст-фуда, кафетерия, помощник на кухне",
            },
            {
                icon: "🧑‍💼",
                title: "03. Продавец-консультант",
                subtitle: "Продавец-ассистент",
            },
            {
                icon: "👩‍💼",
                title: "04. Горничная и Прачечная",
                subtitle: "в Американских отелях",
            },
        ],
        en: [
            {
                icon: "🦸‍♂️",
                title: "01.  Lifeguard",
                subtitle: "One of the popular directions"
            },
            {
                icon: "👨‍🍳",
                title: "02. Cook's Assistant, Waiter",
                subtitle: "Fast Food, Cafeteria worker, Kitchen Assistant",
            },
            {
                icon: "🧑‍💼",
                title: "03. Sales Consultant",
                subtitle: "Shop-assistant",
            },
            {
                icon: "👩‍💼",
                title: "04. Housekeeper и Laundry",
                subtitle: "In American hotels",
            },
        ],
        uz: [
            {
                icon: "🦸‍♂️",
                title: "01. Qutqaruvchi",
                subtitle: "Ommabop yo'nalishlardan biri."
            },
            {
                icon: "👨‍🍳",
                title: "02. Oshpaz yordamchisi, ofitsiant",
                subtitle: "Fast Food, Cafeteria xodimi, Oshxona yordamchisi",
            },
            {
                icon: "🧑‍💼",
                title: "03. Sotuvchi-maslahatchi",
                subtitle: "Do'kon yordamchisi",
            },
            {
                icon: "👩‍💼",
                title: "04. Uy bekasi va Kir yuvish",
                subtitle: "Amerika mehmonxonalari.",
            },
        ]

    }


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[20px] lg:px-[40px] pt-[50px] md:pt-[100px]  '>
                <div className=" pb-[32px]  flex justify-between w-full">
                    <h3 className="font-[700] max-w-[817px] font-oswald text-[#00032E] text-[25px]  md:text-[50px] uppercase">{localization.home.servise.title}</h3>
                  
                </div>  
                <div className="flex items-end gap-[40px] pb-[40px] ">
                    <div className=" text-[#00032E] border border-b-0 border-r-[1.5px] border-[#EBECF1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:[&>*:last-child]:border-r-0  ">

                        {data && data[lang || "ru"]?.map((item, index) => (<div className='pl-[14px] pr-[20px] pb-[48px] border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-[#EBECF1]  pt-[40px] flex flex-col items-center md:items-start text-center md:text-left' key={index}>
                            <div className='text-[48px] w-[60px]  '>{item.icon}</div>
                            <h3 className="font-[600] font-oswald text-[20px] text-[#00032E]  pb-[12px] pt-[16px] uppercase">{item.title}</h3>
                            <p className="font-inter text-[18px]">{item.subtitle}</p>
                        </div>))}    
                  
                        
</div>
                </div>
                  
                
                <button onClick={() => {
                    setIsOpen(true)
                }} className="mx-auto border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full px-[24px] py-[16px] font-[500] text-[20px] font-inter text-[#00032E]">{localization.header.btn}
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

export default ServiseSection;
