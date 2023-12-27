"use client";

import IntroSection from "@/components/sections/Intro";
import OurPartners from "@/components/sections/OurPartners";
import History from "@/components/sections/History"
import TermsSection from "@/components/sections/Terms";
import CostsSection from "../components/sections/Costs";
import OurTeam from "@/components/sections/OurTeam";
import Students from "@/components/sections/Students";
import Advantages from "@/components/sections/advantages";
import ServiceSecton from "@/components/sections/Service";
import ContactSection from "@/components/sections/ContactSection";
import WorkAndTravel from "@/components/sections/WorkandTravel";
import Review from "@/components/sections/Review";
import FormModal from "@/components/sections/Modal";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useState } from "react";
const HomePage = ({ isOpen, setIsOpen }) => {
   return (
      <>
         <NextSeo title="cag" description="cag consulting  " />
         <Head>
            <meta name="keywords" content="cag, cagconsult, caguz" />
         </Head>
         <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
         <div className="flex flex-col pt-[17px]">
            <IntroSection />
         </div>
         <div id="partners" className=" pt-[40px] md:pt-[64px]">
            <WorkAndTravel />
         </div>
         <div id="aboutus" className=" pt-[24px] md:pt-[80px]">
            <History setIsOpen={setIsOpen} />
         </div>
         <div id="mettingrooms" className="pt-[64px]">
            <OurPartners />
         </div>
         <div id="advantages" className="py-[80px]">
            <Advantages setIsOpen={setIsOpen} />
         </div>

         <div id="lead" className="py-[40px] md:pb-[80px]">
            <ServiceSecton setIsOpen={setIsOpen} />
         </div>
         <div id="reviews" className="py-[80px]">
            <Review />
         </div>
         {/* <div id="benifits" className="py-[40px] md:py-[80px]">
            <CostsSection />
         </div> */}
         <div id="terms" className="t-[40px] md:pt-[80px] ">
            <TermsSection setIsOpen={setIsOpen} />
            <Students />
         </div>
         <div id="review" className="py-[80px]">
            <OurTeam setIsOpen={setIsOpen} />
         </div>
         <div id="contacts" className="py-[80px]">
            <ContactSection setIsOpen={setIsOpen} />
         </div>
      </>
   );
};

export default HomePage;
