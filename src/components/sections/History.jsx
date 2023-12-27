import { useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;



const IntroSection = () => {
    const { lang } = useSelector((state) => state.localiztion);
    const { localization } = Content[lang];

    const data = {
        en: [
            {
                address: "Address: 4 Kari Niyazov street, Tashkent",
                info: "The central office in Uzbekistan is open from 10 a.m. to 6 p.m., six days a week.",
                title: "01.  CAG Uzbekistan specializes in cultural and educational exchange, with more than two years of experience"
            },
            {
                title: "02. CAG programs include Work Travel USA, internships USA, Camp Counselor USA programs, and more, besides language school programs.",
                subtitle: "As well as providing visa services such as Exchange visitor visas (), guest or business visas (B1/B2), medicine treatment (B2), and student visas(F) ",
            },
            {
                title: "03. Why we?",
                subtitle: " Everyone who joins our program receives individual attention. We have had in-depth conversations with you to learn about your interests and aspirations, and then we help you find a host organization that meets your needs. Since we established in December 2021, we have sent students to the US from Uzbekistan, Russia, Turkey, Kyrgyzstan, and Kazakhstan. CAG Uzbekistan employees are in the US during the Work & Travel summer program and visit companies until Saturday.members work and get to know the companies.",
            },
        ],
        uz: [
            {
                address: "Manzil: 4 Kari Niyazov ko'chasi, Тоshkent",
                info: "O‘zbekistondagi markaziy ofis haftada olti kun, soat 10:00 dan 18:00 gacha ishlaydi.",
                title: "01. CAG: Amerika orzuingizni amalga oshiradi",
                subtitle: "CAG Uzbekistan ikki yildan ortiq tajribaga ega boʻlgan madaniy- maʼrifiy almashinuvga ixtisoslashgan."
            },
            {
                title: "02. CAG dasturlariga til maktabi dasturlari bilan bir qatorda Work Travel USA, AQShda stajirovkalar, Camp Counselor USA dasturlari va boshqalar kiradi.",
                subtitle: "Shuningdek, viza xizmatlarini taqdim etish, masalan, tashrif buyuruvchilar almashinuvi vizalari (), mehmon yoki biznes vizalari (B1/B2), dori-darmonlarni davolash (B2) va talabalar vizalar(F) ",
            },
            {
                title: "03. Nega biz? ",
                subtitle: "Bizning dasturimizga qo'shilgan har bir kishi alohida e'tiborga olinadi. Biz sizni o'rganish uchun siz bilan chuqur suhbatlar o'tkazdik qiziqishlar va intilishlar, keyin esa biz sizning ehtiyojlaringizga javob beradigan mezbon tashkilotni topishga yordam beramiz. 2021-yil dekabr oyida tashkil etilganimizdan beri biz Oʻzbekiston, Rossiya, Turkiya, Qirgʻiziston va AQShdan talabalarni yubordik. Qozog'iston. CAG Uzbekistan xodimlari Work & Travel yozgi dasturi davomida AQShda bo'lib, shanba kuniga qadar kompaniyalarga tashrif buyurishadi. a'zolari ishlaydi va kompaniyalar bilan tanishadi.",
            },
        ],
        ru: [
            {
                address: "Адресу: ул. Кари Ниязова 4, Ташкент",
                info: "Центральный офис в Узбекистане открыт с 10:00 до 18:00 шесть дней в неделю.",
                title: "01.  Делает вашу американскую мечту реальностью",
                subtitle: "CAG Узбекистан специализируется на культурном и образовательном обмене и имеет более чем двухлетний опыт работы."
            },
            {
                title: "02. Программы CAG включают Work Travel USA, стажировки в США, программы Camp Counselor USA и многое другое, помимо программ языковых школ.",
                subtitle: "А также предоставление визовых услуг, таких как визы для посетителей по обмену (), гостевые или деловые визы (B1/B2), лечение (B2) и студенческие визы(Ф)",
            },
            {
                title: "03. Почему мы?",
                subtitle: "Каждый, кто присоединяется к нашей программе, получает индивидуальное внимание. Мы провели с вами углубленные беседы, чтобы узнать о вашем интересы и стремления, а затем мы поможем вам найти принимающую организацию, отвечающую вашим потребностям. С момента своего основания в декабре 2021 года мы отправили студентов в США из Узбекистана, России, Турции, Кыргызстана и других стран. Казахстан. Сотрудники CAG Узбекистан находятся в США во время летней программы Work & Travel и посещают компании до субботы. члены работают и знакомятся с компаниями.",
            },
        ],
    }


    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[24px] lg:px-[40px]  '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]   flex-wrap gap-[15px] flex justify-between w-full">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.history.title}</h3>
                    <p className="font-[500] text-[#00032E] font-inter  max-w-[670px]">{localization.home.history.subtitle}</p>
                </div>  
                <div className="flex items-end gap-[40px] pt-[56px] pb-[80px] lg:flex-row flex-col-reverse">
                    <button className="lg:mb-[165px] md:w-full border-[2px] border-[#00032E] flex items-center justify-center gap-[8px] rounded-full py-[16px]  px-[24px] mx-auto max-w-[600px] font-[500] text-[20px] text-[#00032E]">{localization.header.btn}
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
                    <div className="lg:max-w-[600px] text-[#00032E]">

                        {data && data?.[lang || "ru"]?.map((item, index) => (<div className='border-b-[1.5px] border-[#EBECF1] py-[48px]' key={index}>
                            <h3 className="font-[600] font-oswald text-[20px] text-[#00032E]  pb-[16px] uppercase">{item.title}</h3>
                            <p className="font-inter text-[18px]">{item.subtitle}</p>
                        </div>))}    
                        <div className='text-[18px]  text-[#00032E] border-t-[1.5px] border-[#EBECF1] pt-[48px]'>
                            <h3 className="font-[600] font-oswald uppercase pb-[16px]">Наши контакты</h3>
                            <p className="font-inter text-[18px]">{data[lang][0].info}</p>
                            <a target='_blank' href='https://maps.app.goo.gl/XaAnDY8NmxUUwPRz5' className="font-inter text-[18px]"> {data[lang][0].address}</a>
                            <p className="font-inter text-[18px]">Тел: <a href="tel:+998339361212">+99833 936-12-12</a>, <a href="tel:+998900016333">+99890 001-63-33</a></p>
                            <a href='mailto:caguzbekistan@gmail.com' className="font-inter text-[18px]">Email: caguzbekistan@gmail.com</a>
                        </div>
                        
</div>
                </div>
                  
                

            </div>

        </section>
    );
};

export default IntroSection;
