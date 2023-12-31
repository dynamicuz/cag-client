import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const AdvantagesSection = ({ setIsOpen }) => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = {
        ru: [
            {
                icon: "/assets/images/svg/hand.svg",
                title: "01. Прокачка SOFT SKILLS",
                subtitle: "Ничего так не привлекает твоих будущих работодателей, как умение коммуницировать, адаптироваться в новому и стремиться к лучшему"
            },
            {
                icon: "/assets/images/svg/earth.svg",
                title: "02. Получишь международный опыт",
                subtitle: "Любой работодатель будет заинтересован в тебе, так как за твоими плечами международная стажировка",
            },
            {
                icon: "/assets/images/svg/head.svg",
                title: "03. Прокачаешь свой английский",
                subtitle: "Ты будешь жить в англоязычной среде, разговаривая с носителями языка каждый день, без никаких курсов",
            },
            {
                icon: "/assets/images/svg/money.svg",
                title: "04. Будешь зарабатывать в иностранной валюте",
                subtitle: "Наши участники зарабатывают не ниже среднего дохода американцев",
            },
        ],
        en: [
            {
                icon: "/assets/images/svg/hand.svg",
                title: "01. Enhance SOFT SKILLS",
                subtitle: "Nothing attracts your future employers as much as the ability to communicate, adapt to new environments, and strive for the best"
            },
            {
                icon: "/assets/images/svg/earth.svg",
                title: "02. Gain International Experience",
                subtitle: "Any employer will be interested in you, as you will have an international internship experience behind you"
            },
            {
                icon: "/assets/images/svg/head.svg",
                title: "03. Improve Your English",
                subtitle: "You will live in an English-speaking environment, speaking with native speakers every day, without any courses"
            },
            {
                icon: "/assets/images/svg/money.svg",
                title: "04. Earn in Foreign Currency",
                subtitle: "Our participants earn at least as much as the average income of Americans"
            }
        ],
        uz: [
            {
                icon: "/assets/images/svg/hand.svg",
                title: "01. SOFT SKILLS ni oshirish",
                subtitle: "Hech narsa kelajakdagi ish beruvchilaringizni muloqot qobiliyati, yangi muhitga moslashuvchanlik va eng yaxshisiga intilish kabi jalb qilmaydi"
            },
            {
                icon: "/assets/images/svg/earth.svg",
                title: "02. Xalqaro tajriba orttirasiz",
                subtitle: "Har qanday ish beruvchi sizga qiziqish bildiradi, chunki sizning orqangizda xalqaro amaliyot bor"
            },
            {
                icon: "/assets/images/svg/head.svg",
                title: "03. Ingliz tilini yaxshilaysiz",
                subtitle: "Siz ingliz tilida gaplashadigan muhitda yashaysiz, har kuni til egalar bilan gaplashasiz, hech qanday kurslarsiz"
            },
            {
                icon: "/assets/images/svg/money.svg",
                title: "04. Chet el valyutasida daromad topasiz",
                subtitle: "Bizning ishtirokchilarimiz o'rtacha amerikaliklarning daromadidan past bo'lmagan daromad topadilar"
            }
        ]

    }


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full   flex-wrap gap-[15px]">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.servise.title2}</h3>
                    <p className="font-[500] text-[#00032E] font-inter max-w-[440px]">{localization.home.servise.subtitle}</p>
                </div>  
                <div className="flex items-end gap-[40px] pb-[40px] ">
                    <div className=" text-[#00032E] border-l-[1.5px] border-r-[1.5px] border-[#EBECF1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full [&>*:last-child]:border-r-0">

                        {data && data[lang || "ru"]?.map((item, index) => (<div className='pl-[14px] pr-[20px] pb-[48px] border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-[#EBECF1]  pt-[40px]' key={index}>

                            <div className='text-[48px] mb-[16px] w-[60px]  '>
                                <Image src={item.icon} alt='image' width={60} height={60} priority/>
                            </div>
                            <h3 className="font-[600] font-oswald text-[20px] text-[#00032E]  pb-[16px] uppercase">{item.title}</h3>
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

export default AdvantagesSection;
