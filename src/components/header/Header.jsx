import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { changeLanguage } from '@/slices/localizationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;

const StickyHeader = ({ type }) => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLang, setIsLang] = useState(false);
    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const langs = ["ru", "uz", "en"]


    const headerLinks = [
        {
            path: "/",
            name: localization.header.home
        },
        {
            path: "/#aboutus",
            name: localization.header.aboutus
        },
        {
            path: "/#advantages",
            name: localization.header.advantages
        },
   
        {
            path: "/#reviews",
            name: localization.header.participants
        },
        {
            path: "/#terms",
            name: localization.header.conditions
        },
        {
            path: "/#contacts",
            name: localization.header.contact
        },
       
] 


    return (
        <>
            <header
                className={` fixed md:sticky w-full h-[80px]  top-0 z-50 py-[17px] lg:py-[17px]  flex items-center justify-between  bg-[#ffffff] `}

            >
                <div className="max-w-[1440px] w-full header-container mx-auto py-1 md:py-1 px-4 md:px-[40px] flex items-center justify-between">
                
                        <div className="text-lg md:text-xl font-semibold">
                            <Link href="/">
                               <Image
                                    src={`/assets/images/logos/logo.png`}
                                    alt=" Logo"
                                    width={63}
                                    height={34}
                                    priority
                                /></Link>
                        </div>
                        <div className='flex items-center  '>
                            
                            <div className={`absolute  capitalize w-full mb-[50px] overflow-y-auto  left-0 top-[62px] shadow-md bg-white flex lg:hidden text-center text-[20px] font-[700] pt-[40px]  space-y-[30px]  ${isMenuOpen ? ' h-[95vh] pb-[70px] flex flex-col' : 'hidden'}`}>
                            
                                {headerLinks && headerLinks?.map((item, index) => (
                                <Link key={index} onClick={() => {
                                    setIsMenuOpen(false)
                                    }} href={item?.path} className={`text-[#272A31]`}>{item?.name}</Link>
                                ))
                                }
                            <div className='flex items-center justify-center'>

                                <Link href="/#lead" className='flex items-center justify-center font-[500] text-[#ffffff] h-[45px] px-[32px] bg-[#205FFF] rounded-[40px] font-oswald'>{localization.header.btn}</Link>

                            </div>
                            </div>
                            <div className={`hidden lg:flex space-x-[24px] `}>
                                {headerLinks && headerLinks?.map((item, index) => (
                                    <Link key={index} href={item?.path} className={`font-[600] capitalize  text-[#272A31]`}>{item?.name}</Link>
                                ))}
                            </div>
                            <div className='  items-center gap-[24px] ml-[24px]'>
                                <select value={lang} onChange={(e) => {
                                    dispatch(changeLanguage({ type: e.target.value }))
                            }} className={` bg-transparent  text-[16px] uppercase  text-[#272A31] font-[600]  outline-none`
                                } >
                                    <option className="bg-white text-black" value={lang} defaultChecked>{lang} </option>
                                    {langs ? langs.filter(el => el != lang).map((item, index) => (<option className="bg-white text-black" key={index} value={item}>{item}</option>
                                    ))
                                        : null}
                                </select>
                          </div>
                        </div>

                    <div className='hidden lg:flex items-center'> 
                        
                        <Link href="/#lead" className='flex items-center justify-center font-[500] text-[#ffffff] h-[45px] px-[32px] bg-[#205FFF] rounded-[40px] font-oswald'>{ localization.header.btn}</Link>

     </div>
                    <div className="lg:hidden ">
                        <button className="w-[30px] text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
                            {isMenuOpen ? <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.25 8.75L8.75 21.25M8.75 8.75L21.25 21.25" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> :
                                <svg width="24" height="23" viewBox="0 0 24 23" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_227_545)">
                                    <path d="M23 10.5414H1C0.447715 10.5414 0 10.9704 0 11.4997C0 12.029 0.447715 12.4581 1 12.4581H23C23.5523 12.4581 24 12.029 24 11.4997C24 10.9704 23.5523 10.5414 23 10.5414Z" fill="#1A1A1A" />
                                    <path d="M23 10.3914H1C0.370952 10.3914 -0.15 10.8817 -0.15 11.4997C-0.15 12.1178 0.370952 12.6081 1 12.6081H23C23.629 12.6081 24.15 12.1178 24.15 11.4997C24.15 10.8817 23.629 10.3914 23 10.3914Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                    <path d="M23 3.83362H1C0.447715 3.83362 0 4.26268 0 4.79195C0 5.32122 0.447715 5.75028 1 5.75028H23C23.5523 5.75028 24 5.32122 24 4.79195C24 4.26268 23.5523 3.83362 23 3.83362Z" fill="#1A1A1A" />
                                    <path d="M23 3.68362H1C0.370953 3.68362 -0.15 4.17388 -0.15 4.79195C-0.15 5.41002 0.370953 5.90028 1 5.90028H23C23.629 5.90028 24.15 5.41002 24.15 4.79195C24.15 4.17388 23.629 3.68362 23 3.68362Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                    <path d="M23 17.25H1C0.447715 17.25 0 17.6791 0 18.2083C0 18.7376 0.447715 19.1667 1 19.1667H23C23.5523 19.1667 24 18.7376 24 18.2083C24 17.6791 23.5523 17.25 23 17.25Z" fill="#1A1A1A" />
                                    <path d="M23 17.1H1C0.370952 17.1 -0.15 17.5903 -0.15 18.2083C-0.15 18.8264 0.370952 19.3167 1 19.3167H23C23.629 19.3167 24.15 18.8264 24.15 18.2083C24.15 17.5903 23.629 17.1 23 17.1Z" stroke="white" stroke-opacity="0.5" stroke-width="0.3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_227_545">
                                        <rect width="24" height="23" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            }

                        </button>
                    </div>
                </div>

            </header>

        </>
    );
};

export default StickyHeader;
