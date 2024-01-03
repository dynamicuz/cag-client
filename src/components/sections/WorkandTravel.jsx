import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const WorkAndTravel = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = [
        {
            img: "/assets/images/png/travel-1.png",
            width: 445,
            height:363
        },
        {
            img: "/assets/images/png/travel-3.png",
            width: 335,
            height: 421
        },
        {
            img: "/assets/images/png/travel-2.png",
            width: 325,
            height: 304
        },
        {
            img: "/assets/images/png/travel-4.png",
            width: 325,
            height: 421
        },
        {
            img: "/assets/images/png/travel-1.png",
            width: 445,
            height: 363
        },
      ]


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto pb-[80px] '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex-wrap gap-[15px] flex justify-between w-full px-[24px] lg:px-[40px] ">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.workandtravel.title}</h3>
                    <p className="font-[500] text-[#00032E] font-inter  max-w-[670px]">{localization.home.workandtravel.subtitle}</p>
                </div>  
              
                <div className="w-full flex items-start lg:pl-[40px] scrol-box overflow-x-auto gap-[10px] pt-[57px]">

                        {data && data?.map((item, index) => (<>
                            <Image src={`${BaseUrlLocal}${item.img}`} alt='image' width={item.width} height={item.height}  />
                        </>))}    
                        
                </div>
                  
                

            </div>

        </section>
    );
};

export default WorkAndTravel;
