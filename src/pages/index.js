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
import Head from "next/head";
import { NextSeo } from "next-seo";

const HomePage = () => {

   return (
      <>
         <NextSeo
            title="impact"
            description="impact the pleace for global anbinations people  "
         />
         <Head>
            <meta name="keywords" content="impact, impactt, impacttuz" />
         </Head>
         <div className="flex flex-col pt-[17px]">
            <IntroSection />
         </div>
         <div id="partners" className=" pt-[24px] md:pt-[64px]">
            <WorkAndTravel />
         </div>
         <div id="partners" className=" pt-[24px] md:pt-[64px]">
            <History />
         </div>
         <div id="mettingrooms" className="pt-[64px]">
            <OurPartners />
         </div>

         <div id="lead" className="py-[80px]">
            <ServiceSecton />
         </div>
         <div id="coworkingspace" className="py-[80px]">
            <Advantages />
         </div>
         <div id="coworkingspace" className="py-[80px]">
            <Review />
         </div>
         <div id="benifits" className="py-[80px]">
            <CostsSection />
         </div>
         <div id="blog" className="">
            <TermsSection />
            <Students />
         </div>
         <div id="review" className="py-[80px]">
            <OurTeam />
         </div>
         <div id="review" className="py-[80px]">
            <ContactSection />
         </div>
      </>
   );
};

export default HomePage;
