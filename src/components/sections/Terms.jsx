import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const TermsSection = ({ setIsOpen }) => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = {
        ru: [
            {
                title: "01. Стажеры",
                subtitle: "Должны быть студентами очного обучения или недавними выпускниками (в течение последних 12 месяцев) с бакалаврской степенью из неамериканского учебного заведения. Должны владеть английским языком свободно. Обязаны покинуть Соединенные Штаты в течение тридцати (30) дней после окончания программы."
            },
            {
                title: "02. Практиканты",
                subtitle: "Должны быть недавними выпускниками или профессионалами с минимум 5 годами соответствующего опыта работы. Должны отлично владеть английским языком. Обязаны обязуются покинуть США в течение тридцати (30) дней после окончания программы J1."
            },
            {
                title: "03. Продолжительность программы",
                subtitle: "Программы стажировок – до 12 месяцев. Программы практикантов – до 18 месяцев.",
            },
            {
                title: "04. Требования к визе",
                subtitle: "Все участники должны получить неиммиграционную визу J-1 для обменных посетителей через посольство США для участия в программе стажировки/практикантов.",
            },
        ],

         uz: [
            {
                title: "01. Amaliyotchilar",
                subtitle: "To'liq vaqtli talaba yoki so'nggi 12 oy ichida bitiruvchi (AQShdan tashqari maktabning bakalavr darajasiga ega) bo'lishi kerak. Ingliz tilida ravon so'zlashi lozim. Dastur tugaganidan keyingi o'ttiz (30) kun ichida AQShni tark etishga rozi bo'lishi kerak."
            },
            {
                title: "02. Praktikantlar",
                subtitle: "So'nggi bitiruvchilar yoki kamida 5 yillik tegishli ish tajribasiga ega mutaxassislar bo'lishi kerak. Ingliz tilida a'lo darajada so'zlashi lozim. J1 dasturining oxirgi kunidan keyingi o'ttiz (30) kun ichida AQShni tark etish majburiyatini oladi.",
            },
            {
                title: "03. Dastur davomiyligi",
                subtitle: "Amaliyot dasturlari – 12 oyggacha. Praktikantlik dasturlari – 18 oyggacha.",
            },
            {
                title: "04. Viza talablari",
                subtitle: "Barcha ishtirokchilar AQSh elchixonasi orqali J-1 bo'lmagan immigrant almashinuv tashrif buyuruvchisi vizasini olishlari kerak, amaliyotchi/praktikant dasturida qatnashish uchun.",
            },
        ],

             en: [
    {
        title: "01. Interns",
                 subtitle: "Must be a full- time student or a recent graduate(within the last 12 months) with a post- secondary bachelor's degree from a non-U.S. school. Must be fluent in English. Must agree to depart the United States within thirty(30) days of the program's conclusion. "
    },
    {
        title: "02. Trainees ",
        subtitle: "Must be a recent graduate, or A professional with at least 5 years of related work experience.   Must speak excellent English.   Must commit to leaving the U.S.within thirty (30) days following the last day of the J1 program.",
    },
    {
        title: "03. Program Duration",
        subtitle: "Intern Programs – Up to 12 months Trainee Programs – Up to 18 months",
    },
    {
        title: "04. Visa Requirements",
        subtitle: "All participants must obtain a J-1 Non-immigrant exchange visitor visa through the US Embassy to participate in Internship/Trainee program.",
    },
]
    }


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full   flex-wrap gap-[15px]">
                  <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.terms.title}</h3>
                      <p className="font-[500] text-[#00032E] font-inter max-w-[670px]">{localization.home.terms.subtitle}</p>
                </div>  
                <div className="flex items-end gap-[40px] pt-[56px] pb-[80px] lg:flex-row flex-col-reverse">
                    <button onClick={() => {
                        setIsOpen(true)
                    }} className="md:mb-[165px] border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full py-[16px]  w-full px-[24px] mx-auto max-w-[600px] font-[500] text-[20px] text-[#00032E]">{localization.header.btn}
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
                    <div className="lg:max-w-[670px] text-[#00032E] [&>*:last-child]:border-b-0">

                        {data && data[lang || "ru"]?.map((item, index) => (<div className='border-b-[1.5px] border-[#EBECF1] py-[48px]' key={index}>
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
