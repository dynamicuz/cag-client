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
    const data = {
        uz: [
            {
                img: "/assets/images/png/student-1.jpg",
                user: "Yarbilov Abdulla",
                avatar: "/assets/images/png/review-student-2.jpg",
                district: "Toshkent",
                info: "Men hammaga, ayniqsa narxidan xavotirda bo'lganlar uchun CAG-Uzbekistan dan Amerika Qo'shma Shtatlariga sayohat qilishni taklif qilaman. Nega? Dastur xarajatlarini to'liq qoplashimga ikki oycha vaqt ketdi. Keyingi haftalarda men kelasi yilgi universitet kontrakt xarajatlarini, shuningdek, taxminan bir oylik sayohatni qoplash uchun yetarlicha pul yig'dim! Men juda ko'p qiziqarli joylarda bo'ldim, jumladan Chikago va Pensilveniya, u erda ajoyib do'stlar bilan uchrashdim. Bundan tashqari, men Nyu-York, Los-Anjeles va Nyu-Jersida edim. Men buni hammaga tavsiya qilgan bo'lardim."
            },
            {
                img: "/assets/images/png/student-5.jpg",
                user: "Alisher Toshpulatov",
                avatar: "/assets/images/png/review-student-1.jpg",
                district: "Toshkent",
                info: "CAG-Uzbekistan koʻmagi tufayli men oʻz orzularimni roʻyobga chiqara oldim va AQShga sayohat qildim. Men har doim buni amalga oshirishni xohlardim, lekin men hech qachon moliyaviy resurslarimni va butun sayohatni samarali boshqara olmadim. CAG O‘zbekiston menga xalqaro tajribamning deyarli barcha jabhalarida yordam berdi: viza olishdan tortib mukammal ish va uy- joy topishgacha.Va hammasi maqbul narxda.Men buni chin yurakdan qo‘llab - quvvatlayman! Amerika aql bovar qilmaydigan.Bu hayotiy kuch. , bu odamlar va juda ko'p imkoniyatlar... Bu aql bovar qilmaydigan tajriba!"
            },
            {
                img: "/assets/images/png/student-4.jpg",
                user: "Mukhammadjon Masharibov",
                avatar: "/assets/images/png/review-student-4.jpg",
                district: "Toshkent",
                info: "Work and Tavel dasturi menga koʻp narsani oʻrgatdi, men mustaqil boʻldim, dunyoqarashimni kengaytirdim, Amerika madaniyati va u yerda yashovchi aholi haqidagi tushunchalarimni yaxshiladim. dastur Men orzu qilgan barcha joylarda bo'lganman, masalan, San-Fransiskodagi Oltin ko'prik, Arizonadagi Katta Kanyon, Las-Vegasdagi Grand Casino, Nyu-Yorkdagi Liberti shtati va, albatta, Los-Anjelesdagi Gollivud. Men sizga dasturda qatnashishdan qo'rqmaslikni va hoziroq ariza topshirishni tavsiya qilaman."
            },

        ],
        en: [
            {
                img: "/assets/images/png/student-1.jpg",
                user: "Alisher Toshpulatov",
                avatar: "/assets/images/png/review-student-2.jpg",
                district: "Tashkent",
                info: "Thanks to CAG-Uzbekistan, I was able to fulfill my dreams and travel to the USA. I always wanted to do this, but I never could effectively manage my financial resources and the entire trip. CAG Uzbekistan helped me in almost all aspects of my international experience: from obtaining a visa to finding the perfect job and housing. And all at an affordable price. I strongly support this! America is unbelievable. It's a life force, the people, and so many opportunities... An unbelievable experience!"
            },
            {
                img: "/assets/images/png/student-5.jpg",
                user: "Yarbilov Abdulla",
                avatar: "/assets/images/png/review-student-1.jpg",
                district: "Tashkent",
                info: "I recommend everyone, especially those worried about the price, to travel to the United States with CAG-Uzbekistan. Why? It took me about two months to fully cover the program expenses. In the following weeks, I managed to gather enough money to cover next year's university contract expenses, as well as for approximately a month of travel! I have been to many interesting places, including Chicago and Pennsylvania, where I met amazing friends. Additionally, I was in New York, Los Angeles, and New Jersey. I would recommend this to everyone."
            },
            {
                img: "/assets/images/png/student-4.jpg",
                user: "Mukhammadjon Masharibov",
                avatar: "/assets/images/png/review-student-4.jpg",
                district: "Tashkent",
                info: "The Work and Travel program taught me a lot; I became independent, broadened my worldview, and improved my understanding of American culture and the people living there. I have been to all the places I dreamed of, like the Golden Bridge in San Francisco, the Grand Canyon in Arizona, the Grand Casino in Las Vegas, the Statue of Liberty in New York, and of course, Hollywood in Los Angeles. I advise you not to be afraid of participating in the program and apply right now."
            },

        ],
        ru: [
            {
                img: "/assets/images/png/student-1.jpg",
                user: "Алишер Тошпулатов",
                avatar: "/assets/images/png/review-student-2.jpg",
                district: "Ташкент",
                info: "Благодаря CAG-Uzbekistan я смог осуществить свои мечты и посетить США. Я всегда хотел это сделать, но никогда не мог эффективно управлять своими финансами и всей поездкой. CAG Узбекистан помог мне почти во всех аспектах моего международного опыта: от получения визы до нахождения идеальной работы и жилья. И все это по доступной цене. Я полностью поддерживаю это! Америка невероятна. Это жизненная сила, люди и так много возможностей... Невероятный опыт!"
            },
            {
                img: "/assets/images/png/student-5.jpg",
                user: "Ярбилов Абдулла",
                avatar: "/assets/images/png/review-student-1.jpg",
                district: "Ташкент",
                info: "Я рекомендую всем, особенно тем, кто беспокоится о цене, посетить Соединенные Штаты Америки с CAG-Uzbekistan. Почему? Мне потребовалось около двух месяцев, чтобы полностью покрыть расходы программы. В последующие недели я собрал достаточно денег, чтобы покрыть расходы на университетский контракт на следующий год, а также на примерно месяц путешествия! Я был во многих интересных местах, включая Чикаго и Пенсильванию, где встретил замечательных друзей. Кроме того, я был в Нью-Йорке, Лос-Анджелесе и Нью-Джерси. Я бы порекомендовал это каждому."
            },
   
            {
                img: "/assets/images/png/student-4.jpg",
                user: "Мухаммаджон Машарибов",
                avatar: "/assets/images/png/review-student-4.jpg",
                district: "Ташкент",
                info: "Программа Work and Travel научила меня многому; я стал независимым, расширил свой кругозор и улучшил свои представления о культуре Америки и людях, которые там живут. Я был во всех местах, о которых мечтал, как Золотой мост в Сан-Франциско, Большой каньон в Аризоне, Гранд-казино в Лас-Вегасе, Статуя Свободы в Нью-Йорке и, конечно, Голливуд в Лос-Анджелесе. Я советую вам не бояться участвовать в программе и подать заявку прямо сейчас."
            },

        ],
    }

   
    return (
        <section >
            <div className=' max-w-[1440px] w-full mx-auto px-[20px] lg:px-[40px] '>
                <div className="border-[#EBECF1] border-b-[1px] pb-[32px]  flex justify-between w-full   flex-wrap gap-[15px]">
                    <h3 className="font-[700] font-oswald text-[#7F8698] uppercase">{localization.home.review.title}</h3>
                    <p className="font-[500] text-[#00032E] font-inter  max-w-[440px]">{localization.home.review.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-[20px] pt-[56px] ">

                    <div className='h-[520px] hidden md:block'>
                        <Image src={data[lang || "ru"][activeItem].img} alt='image' width={669} height={520}  className='h-full object-fill'/>
           </div>
                    <div className='flex flex-col justify-between h-[520px]'>
                        <div>
                            <div className='flex items-center gap-[17px] pb-[24px]'>
                                <Image src={data[lang || "ru"][activeItem].avatar} alt='image' width={72} height={72} className='rounded-full h-[72px] object-cover ' />
                                <div>
                                    <h3 className="font-[600] text-[18px]">{data[lang || "ru"][activeItem].user}</h3>
                                    <p className="text-[15px] font-[500]">{data[lang || "ru"][activeItem].district}</p>
                                </div>
                            </div>
                            <p className="text-[18px]">{data[lang || "ru"][activeItem].info}</p>
                     </div>
                        <div className='flex items-center gap-[20px]  mt-[40px]'>
                            <span className='bg-[#E2E8F0] w-full h-[4px] inline-flex rounded-full overflow-hidden'>
                                {data[lang || "ru"].length && data[lang || "ru"].map((item, index) => (

                                    <span onClick={()=> setActiveItem(index)} style={{ width: Number( 100/data[lang || "ru"].length)+"%"}} className=
                                        {` ${activeItem == index ? "bg-[#205FFF] rounded-tr-full rounded-br-full" : activeItem > index ? "bg-[#205FFF]" : "bg-transparent"} h-full inline-block `}>
                                     
                                        </span>
                                        ))}
                                     
                            </span>
                            <div className='flex items-center gap-[16px]'>
                                <button  onClick={() => {
                                    setActiveItem(num => num !== 0 && num - 1)
                                }} disabled={activeItem == 0 ? true : false} className="disabled:opacity-[0.4]">
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
                         
                                <button className='disabled:opacity-[0.4]' onClick={() => {
                                    setActiveItem(num => activeItem !== data[lang || "ru"].length && num +1)
                                }}
                                    disabled={activeItem == data[lang || "ru"].length-1 ? true : false}
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
