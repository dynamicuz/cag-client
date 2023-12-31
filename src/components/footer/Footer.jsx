import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
const BaseUrlLocal = process.env.NEXT_PUBLIC_ANALYTICS_BASEURLLOCAL;

export default function Footer() {
    const { lang } = useSelector((state) => state.localiztion);

    const { localization } = Content[lang];

    const FooterLinks = [
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
        <footer className=" bg-[#F8F8FA]">
            <div className="max-w-[1440px] py-[20px] mx-auto md:pt-[31px] px-[16px] md:px-[40px] flex flex-col items-center justify-center">
                <div className="w-full flex lg:justify-between items-center flex-wrap justify-center gap-[30px]">
                    <Link href="/">
                        <Image
                            src={`${BaseUrlLocal}/assets/images/logos/logo.png`}
                            alt=" Logo"
                            width={63}
                            height={34}
                            priority
                        /></Link>
                <ul className="text-[#00032E] flex items-center flex-wrap justify-center gap-[24px] ">
                    {FooterLinks && FooterLinks.map((item, index) => (
                        <li key={index} className="font-[600] capitalize "><Link href={item.path}>{item.name}</Link></li>
                        ))}
                    </ul>
                    <div className="flex gap-[8px] items-center">
                        <a target="_blank" href="https://t.me/CAG_UZ" className="w-[40] h-[40px] rounded-full p-[12px] inline-block border border-[#D1D5DB]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.82684 6.88004C5.49781 5.2806 7.94571 4.22615 9.17052 3.7167C12.6676 2.26209 13.3943 2.00941 13.8679 2.00107C13.9721 1.99923 14.205 2.02505 14.3558 2.14748C14.4832 2.25085 14.5183 2.3905 14.5351 2.48851C14.5518 2.58652 14.5727 2.80979 14.5561 2.98425C14.3666 4.9755 13.5466 9.80772 13.1294 12.0379C12.9529 12.9816 12.6054 13.2981 12.2689 13.329C11.5376 13.3963 10.9823 12.8457 10.274 12.3814C9.16572 11.6549 8.5396 11.2026 7.4638 10.4937C6.22052 9.67434 7.02648 9.22402 7.73502 8.48807C7.92045 8.29548 11.1425 5.36472 11.2048 5.09885C11.2126 5.0656 11.2199 4.94166 11.1462 4.87621C11.0726 4.81076 10.9639 4.83314 10.8855 4.85094C10.7743 4.87617 9.0038 6.04647 5.5739 8.36183C5.07134 8.70694 4.61613 8.87509 4.20829 8.86628C3.75867 8.85656 2.89378 8.61205 2.25083 8.40304C1.46222 8.14669 0.835454 8.01115 0.890032 7.57579C0.918459 7.34902 1.23073 7.1171 1.82684 6.88004Z" fill="#205FFF" />
                            </svg>
                        </a>
                        {/* <a href="http://" className="w-[40] h-[40px] rounded-full p-[12px] inline-block border border-[#D1D5DB]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14.3873 11.2083C14.3117 11.4913 14.1628 11.7495 13.9556 11.9566C13.7485 12.1638 13.4904 12.3127 13.2073 12.3883C12.1673 12.6683 8.00065 12.6683 8.00065 12.6683C8.00065 12.6683 3.83398 12.6683 2.79398 12.3883C2.51094 12.3127 2.25283 12.1638 2.04566 11.9566C1.8385 11.7495 1.68961 11.4913 1.61398 11.2083C1.33398 10.1683 1.33398 8.00163 1.33398 8.00163C1.33398 8.00163 1.33398 5.83496 1.61398 4.79496C1.68961 4.51192 1.8385 4.2538 2.04566 4.04664C2.25283 3.83948 2.51094 3.69058 2.79398 3.61496C3.83398 3.33496 8.00065 3.33496 8.00065 3.33496C8.00065 3.33496 12.1673 3.33496 13.2073 3.61496C13.4904 3.69058 13.7485 3.83948 13.9556 4.04664C14.1628 4.2538 14.3117 4.51192 14.3873 4.79496C14.6673 5.83496 14.6673 8.00163 14.6673 8.00163C14.6673 8.00163 14.6673 10.1683 14.3873 11.2083ZM6.66732 6.00163V10.0016L10.134 8.00163L6.66732 6.00163Z" fill="#205FFF" />
                            </svg>
                        </a> */}
                        <a target="_blank" href="https://www.instagram.com/caguzbekistan?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" className="w-[40] h-[40px] rounded-full p-[12px] inline-block border border-[#D1D5DB]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10.9535 1.59961H5.04576C4.13209 1.60059 3.25611 1.96398 2.61004 2.61004C1.96398 3.25611 1.60059 4.13209 1.59961 5.04576V10.9535C1.60059 11.8671 1.96398 12.7431 2.61004 13.3892C3.25611 14.0352 4.13209 14.3986 5.04576 14.3996H10.9535C11.8671 14.3986 12.7431 14.0352 13.3892 13.3892C14.0352 12.7431 14.3986 11.8671 14.3996 10.9535V5.04576C14.3986 4.13209 14.0352 3.25611 13.3892 2.61004C12.7431 1.96398 11.8671 1.60059 10.9535 1.59961ZM7.99961 10.9535C7.41539 10.9535 6.8443 10.7802 6.35854 10.4556C5.87278 10.1311 5.49418 9.66974 5.27061 9.13C5.04704 8.59025 4.98855 7.99633 5.10252 7.42334C5.2165 6.85035 5.49782 6.32403 5.91092 5.91092C6.32403 5.49782 6.85035 5.2165 7.42334 5.10252C7.99633 4.98855 8.59025 5.04704 9.13 5.27061C9.66974 5.49418 10.1311 5.87278 10.4556 6.35854C10.7802 6.8443 10.9535 7.41539 10.9535 7.99961C10.9526 8.78277 10.6412 9.53362 10.0874 10.0874C9.53362 10.6412 8.78277 10.9526 7.99961 10.9535ZM11.6919 5.04576C11.5459 5.04576 11.4031 5.00245 11.2816 4.92131C11.1602 4.84017 11.0656 4.72483 11.0097 4.5899C10.9538 4.45496 10.9392 4.30648 10.9676 4.16323C10.9961 4.01999 11.0665 3.88841 11.1697 3.78513C11.273 3.68185 11.4046 3.61152 11.5479 3.58303C11.6911 3.55454 11.8396 3.56916 11.9745 3.62505C12.1094 3.68094 12.2248 3.77559 12.3059 3.89703C12.3871 4.01847 12.4304 4.16125 12.4304 4.3073C12.4304 4.50315 12.3526 4.69098 12.2141 4.82947C12.0756 4.96796 11.8878 5.04576 11.6919 5.04576ZM9.96884 7.99961C9.96884 8.38909 9.85335 8.76982 9.63696 9.09366C9.42058 9.41749 9.11303 9.6699 8.7532 9.81894C8.39337 9.96799 7.99743 10.007 7.61543 9.931C7.23344 9.85502 6.88255 9.66747 6.60715 9.39207C6.33175 9.11666 6.1442 8.76578 6.06822 8.38379C5.99223 8.00179 6.03123 7.60585 6.18028 7.24602C6.32932 6.88619 6.58173 6.57864 6.90556 6.36225C7.2294 6.14587 7.61013 6.03038 7.99961 6.03038C8.52188 6.03038 9.02276 6.23785 9.39207 6.60715C9.76137 6.97646 9.96884 7.47734 9.96884 7.99961Z" fill="#205FFF" />
                            </svg>
                        </a>
                    </div>
                        </div>    
                <div className="text-[#A6ADB9] text-[16px] pb-[28px] pt-[50px]">
                    © {new Date().getFullYear()} CAG. {localization.header.copy}
                </div>
          </div>
        </footer>

    )
}
