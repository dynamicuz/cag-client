import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const OurTeamSection = ({ setIsOpen }) => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = {
        ru:{
        district: "Ташкент",
            address: "ул. Кари Ниязова 4, Ташкент",
                workdays: {
            days: "Понедельник — Суббота",
                hours: "С 10:00 до 18:00",
                
            },
        relaxdays: {
            days: "Воскресенье",
                hours: "Выходной",
            },
        user: {
            name: "Алишер Номонов",
                phone: "+998 90 900 00 09",
                    email: "caguzbekistan@gmail.com",
                        telegram: "t.me/CAG_UZ",
            }
        },
        en: {
            district: "Tashkent",
            address: "Kari Niyazov street 4, Tashkent",
            workdays: {
                days: "Monday - Saturday",
                hours: "From 10:00 to 18:00",

            },
            relaxdays: {
                days: "Sunday",
                hours: "Holiday",
            },
            user: {
                name: "Alisher Nomonov",
                phone: "+998 90 900 00 09",
                email: "caguzbekistan@gmail.com",
                telegram: "t.me/CAG_UZ",
            }
        },
        uz: {
            district: "Toshkent",
            address: "Toshkent, Qori Niyozov ko‘chasi, 4-uy",
            workdays: {
                days: "dushanba - shanba",
                hours: "10:00 dan 18:00 gacha",

            },
            relaxdays: {
                days: "yakshanba",
                hours: "Bayram",
            },
            user: {
                name: "Alisher No'monov",
                phone: "+998 90 900 00 09",
                email: "caguzbekistan@gmail.com",
                telegram: "t.me/CAG_UZ",
            }
        },
    }

    const locationIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_40_5679)">
            <path d="M7.5 9.1665C7.5 9.82955 7.76339 10.4654 8.23223 10.9343C8.70107 11.4031 9.33696 11.6665 10 11.6665C10.663 11.6665 11.2989 11.4031 11.7678 10.9343C12.2366 10.4654 12.5 9.82955 12.5 9.1665C12.5 8.50346 12.2366 7.86758 11.7678 7.39874C11.2989 6.9299 10.663 6.6665 10 6.6665C9.33696 6.6665 8.70107 6.9299 8.23223 7.39874C7.76339 7.86758 7.5 8.50346 7.5 9.1665Z" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.7148 13.8806L11.179 17.4164C10.8665 17.7286 10.4428 17.904 10.0011 17.904C9.55933 17.904 9.13567 17.7286 8.82315 17.4164L5.28649 13.8806C4.35417 12.9482 3.71927 11.7603 3.46206 10.4671C3.20485 9.17394 3.3369 7.83352 3.84149 6.61536C4.34608 5.39721 5.20057 4.35604 6.29689 3.62351C7.39321 2.89098 8.68213 2.5 10.0007 2.5C11.3192 2.5 12.6081 2.89098 13.7044 3.62351C14.8007 4.35604 15.6552 5.39721 16.1598 6.61536C16.6644 7.83352 16.7965 9.17394 16.5392 10.4671C16.282 11.7603 15.6471 12.9482 14.7148 13.8806Z" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_40_5679">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>

    const clockIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33398 4.16683C3.33398 3.94582 3.42178 3.73385 3.57806 3.57757C3.73434 3.42129 3.9463 3.3335 4.16732 3.3335H15.834C16.055 3.3335 16.267 3.42129 16.4232 3.57757C16.5795 3.73385 16.6673 3.94582 16.6673 4.16683V15.8335C16.6673 16.0545 16.5795 16.2665 16.4232 16.4228C16.267 16.579 16.055 16.6668 15.834 16.6668H4.16732C3.9463 16.6668 3.73434 16.579 3.57806 16.4228C3.42178 16.2665 3.33398 16.0545 3.33398 15.8335V4.16683Z" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 5.8335V10.0002L12.5 12.5002" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33398 10H4.16732" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.834 10H16.6673" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 15.8335V16.6668" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const userIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_40_5785)">
            <path d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 8.3335C7.5 8.99654 7.76339 9.63242 8.23223 10.1013C8.70107 10.5701 9.33696 10.8335 10 10.8335C10.663 10.8335 11.2989 10.5701 11.7678 10.1013C12.2366 9.63242 12.5 8.99654 12.5 8.3335C12.5 7.67045 12.2366 7.03457 11.7678 6.56573C11.2989 6.09689 10.663 5.8335 10 5.8335C9.33696 5.8335 8.70107 6.09689 8.23223 6.56573C7.76339 7.03457 7.5 7.67045 7.5 8.3335Z" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.14062 15.7077C5.34688 15.0212 5.76893 14.4195 6.34416 13.9918C6.9194 13.5641 7.61716 13.3333 8.33396 13.3335H11.6673C12.385 13.3332 13.0836 13.5647 13.6593 13.9933C14.2349 14.422 14.6568 15.025 14.8623 15.7127" stroke="#205FFF" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_40_5785">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>



    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full   flex-wrap gap-[15px]">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.contact.title}</h3>
                    <p className="font-[500] text-[#00032E] font-inter max-w-[670px]">{localization.home.contact.subtitle}</p>
                </div>
                <div className="flex items-end gap-[40px] pt-[56px] pb-[55px] ">
                    <div className=" text-[#00032E] gap-[20px]   w-full">
                
                        {/* {data && data?.map((item, index) => ( */}
                            <div className='grid  md:grid-cols-3 w-full font-inter ' >
                           
                            <div className='flex flex-col gap-[12px] py-[16px] border-[#E2E8F0]'>
                                {locationIcon}
                                <div>
                                    <h3 className="font-[700] font-inter text-[16px]  text-[#00032E] uppercase">{data?.[lang].district}</h3>
                                    <p className="font-inter">
                                        {data?.[lang].address}</p>
                              </div>
                           </div>
                            <div className='flex flex-col gap-[8px] py-[16px] pl-[10px] md:border-l-[1px] md:border-t-0 border-t-[1px] border-[#E2E8F0]'>
                                {clockIcon}
                                <b className='font-[700] text-[15px]'>  {data?.[lang].workdays.days}</b>
                                <p>  {data?.[lang].workdays.hours}</p>
                                <b className='font-[700] text-[15px]'>  {data?.[lang].relaxdays.days}</b>
                                <p>  {data?.[lang].relaxdays.hours}</p>
                            </div>
                            <div className='flex flex-col gap-[8px] py-[16px] pl-[10px] md:border-l-[1px] border-t-[1px] md:border-t-0 border-[#E2E8F0]'>
                                    {userIcon}
                                <b className="font-inter font-[700] pt-[4px] text-[15px]">
                                    {data?.[lang].user.name}</b>
                                <p><a href="tel:+998339361212">+99833 936-12-12</a></p>
                                <p><a href="tel:++998900016333">+99890 001-63-33</a></p>
                                <p><a href="mailto:caguzbekistan@gmail.com">{data?.[lang].user.email}</a></p>
                                <p><a href="https://t.me/CAG_UZ">{data?.[lang].user.telegram}</a></p>
                           </div>
                        </div>
                        {/* ))} */}
                    

                    </div>
                </div>
            
                <button onClick={() => {
                    setIsOpen(true)
                }} className="mx-auto border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full py-[16px] px-[24px] font-[500] text-[20px] text-[#00032E]">{localization.header.btn}
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
    
    )
}

export default OurTeamSection;
