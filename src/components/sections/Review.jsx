import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const WorkAndTravel = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];
    const [activeItem, setActiveItem] = useState(0)
    const data = [
        {
            img: "/assets/images/png/travel-1.png",
            user: "Айгерим",
            district: "Г. Ташкент",
            info:"Весной этого года мне одобрили долгожданную визу и на летних каникулах я полетела в США.Америка на самом деле очень сильно меня впечатлила.Возможно это связано с тем, что я не бывала в других странах до этого. Там не важно во что ты одет или как ты себя ведешь.Там чувствуется некая свобода. Люди доброжелательныеи очень позитивные – всегда улыбаются и готовы поддержать, даже если ты сделаешь что-то не так."
        },
        {
            img: "/assets/images/png/travel-3.png",
            user: "Айгерим",
            district: "Г. Ташкент",
            info: "Весной этого года мне одобрили долгожданную визу и на летних каникулах я полетела в США.Америка на самом деле очень сильно меня впечатлила.Возможно это связано с тем, что я не бывала в других странах до этого. Там не важно во что ты одет или как ты себя ведешь.Там чувствуется некая свобода. Люди доброжелательныеи очень позитивные – всегда улыбаются и готовы поддержать, даже если ты сделаешь что-то не так."
        },
        {
            img: "/assets/images/png/travel-2.png",
            user: "Айгерим",
            district: "Г. Ташкент",
            info: "Весной этого года мне одобрили долгожданную визу и на летних каникулах я полетела в США.Америка на самом деле очень сильно меня впечатлила.Возможно это связано с тем, что я не бывала в других странах до этого. Там не важно во что ты одет или как ты себя ведешь.Там чувствуется некая свобода. Люди доброжелательныеи очень позитивные – всегда улыбаются и готовы поддержать, даже если ты сделаешь что-то не так."
        },
        {
            img: "/assets/images/png/travel-4.png",
            user: "Айгерим",
            district: "Г. Ташкент",
            info: "Весной этого года мне одобрили долгожданную визу и на летних каникулах я полетела в США.Америка на самом деле очень сильно меня впечатлила.Возможно это связано с тем, что я не бывала в других странах до этого. Там не важно во что ты одет или как ты себя ведешь.Там чувствуется некая свобода. Люди доброжелательныеи очень позитивные – всегда улыбаются и готовы поддержать, даже если ты сделаешь что-то не так."
        },
        {
            user: "Айгерим",
            district: "Г. Ташкент",
            info: "Весной этого года мне одобрили долгожданную визу и на летних каникулах я полетела в США.Америка на самом деле очень сильно меня впечатлила.Возможно это связано с тем, что я не бывала в других странах до этого. Там не важно во что ты одет или как ты себя ведешь.Там чувствуется некая свобода. Люди доброжелательныеи очень позитивные – всегда улыбаются и готовы поддержать, даже если ты сделаешь что-то не так."
        },
    ]

    console.log(`bg-[#205FFF] w-[${(100 / data.length).toFixed(0)}%] h-full inline-block rounded-full`);

    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto pb-[80px]  px-[24px] lg:px-[40px] '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full ">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">Work & travel это</h3>
                    <p className="font-[500] text-[#00032E] font-inter  max-w-[440px]">Отзывы наших Путешественников: Истории Успеха
                        и Впечатления от Новых Приключений</p>
                </div>

                <div className="grid grid-cols-2 gap-[20px] pt-[56px] pb-[80px]">

                    <Image src={data[activeItem].img} alt='image' width={669} height={520} />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex items-center gap-[17px] pb-[24px]'>
                                <Image src={data[activeItem].img} alt='image' width={72} height={72} className='rounded-full h-[72px] object-cover ' />
                                <div>
                                    <h3 className="font-[600] text-[18px]">{data[activeItem].user}</h3>
                                    <p className="text-[15px] font-[500]">{data[activeItem].district}</p>
                                </div>
                            </div>
                            <p className="text-[18px]">{data[activeItem].info}</p>
                     </div>
                        <div className='flex items-center gap-[20px]'>
                            <span className='bg-[#E2E8F0] w-full h-[4px] inline-flex'>
                                {data.length && data.map((item) => (
                                    <span className={`bg-[#205FFF] w-[20%] h-full inline-block rounded-full`}></span>
                                ))}
                            </span>
                            <div className='flex items-center gap-[16px]'>
                                <button onClick={() => {
                                    setActiveItem(num => num !== 0 && num - 1)
                                }} disabled={activeItem == 0 ? true : false} className='disabled:opacity-[5]'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_21_3012)">
                                            <path d="M25 10L15 20L25 30" stroke="#00031A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_21_3012">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                                <button onClick={() => {
                                    setActiveItem(num => num !== data.length && num +1)
                                }}
                                    disabled={activeItem == data.length-1 ? true : false}
                                >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_21_3015)">
                                            <path d="M15 10L25 20L15 30" stroke="#00031A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_21_3015">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                          </div>
                       </div>
</div>
                </div>



            </div>

        </section>
    );
};

export default WorkAndTravel;
