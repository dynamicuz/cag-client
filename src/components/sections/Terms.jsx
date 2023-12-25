import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const TermsSection = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = [
        {
            title: "01. Студент ВУЗа",
            subtitle:"Бакалавриата, Магистратурыили Аспирант очного отделения любого ВУЗа Узбекистана и не только"
        },
        {
            title: "02. Совершеннолетие",
            subtitle: "Для успешной регистрации необходимо, чтобы ваш возраст был не менее 18 лет на момент подачи заявки, а именно к 1 июня 2024 года.",
        },
        {
            title: "03. Уровеньанглийского языка",
            subtitle: "Базовый уровень владения английским языком и стремление к его дальнейшему улучшению.",
        },
        {
            title: "04. Самостоятельность",
            subtitle: "Способность нести ответственность за собственные действия и решения.",
        },
      ]


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">Условия участия</h3>
                    <p className="font-[500] text-[#00032E] font-inter max-w-[670px]">Для вашего удобства процесс оплаты был структурирован на четыре этапа, обеспечивая более удобное и пошаговое осуществление транзакции.</p>
                </div>  
                <div className="flex items-end gap-[40px] pt-[56px] pb-[80px] ">
                    <button className="md:mb-[165px] border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full py-[16px] w-[600px] font-[500] text-[20px] text-[#00032E]">{localization.header.btn}
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
                    <div className="w-[670px] text-[#00032E] [&>*:last-child]:border-b-0">

                        {data && data?.map((item, index) => (<div className='border-b-[1.5px] border-[#EBECF1] py-[48px]' key={index}>
                            <h3 className="font-[600] font-oswald text-[20px] text-[#00032E]  pb-[16px] uppercase">{item.title}</h3>
                            <p className="font-inter text-[18px]">{item.subtitle}</p>
                        </div>))}    
                  
                        
</div>
                </div>
                  
                

            </div>

        </section>
    );
};

export default TermsSection;
