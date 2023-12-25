import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const CostsSection = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = [
        {
            title: "Первоначальный взнос",
            subtitle:"Первоначальный взнос 1 000 000 сум (в течении 3-рабочих дней с момента регистрации). И $500 (в течении месяцас момента регистрации)"
        },
        {
            title: "Job Offer",
            subtitle: "После предоставленияjob offer’a – $800(примерно ноябрь-декабрь)",
        },
        {
            title: "Оплата консульского сбора",
            subtitle: "В середине марта производится оплата Консульского сбора за визу $185 и Sevis Fee $35",
        },
        {
            title: "После собеседования на визу",
            subtitle: "Пройдя собеседование на визу в апреле-мае, оплачивается $2600 при вылете из Казахстана с Алматы либо Нур-Султана",
        },
      ]


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">Стоимость участия</h3>
                    <p className="font-[500] text-[#00032E] font-inter max-w-[670px]">Для вашего удобства процесс оплаты был структурирован на четыре этапа, обеспечивая более удобное и пошаговое осуществление транзакции.</p>
                </div>  
                <div className="flex items-end gap-[40px] pt-[56px] pb-[80px] ">
                    <div className="grid grid-cols-2 text-[#00032E] [&>*:nth-child(odd)]:border-r-0  [&>*:nth-child(1)]:border-b-0 [&>*:nth-child(2)]:border-b-0 [&>*:nth-child(1)]:bg-[#F8F8FA] [&>*:nth-child(4)]:bg-[#F8F8FA] ">

                        {data && data?.map((item, index) => (<div className='flex flex-col justify-between h-[335px]  border-[1.5px] border-[#EBECF1] p-[32px]' key={index}>
                            <span className='w-[72px] h-[72px] rounded-full font-[600] text-[24px] text-[#ffffff] font-oswald flex items-center justify-center bg-[#205FFF]'>0{1+index}</span>
                            <h3 className="font-[600] font-oswald text-[20px] text-[#00032E]  pb-[16px] uppercase">{item.title}</h3>
                            <p className="font-inter text-[18px]">{item.subtitle}</p>
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

export default CostsSection;
