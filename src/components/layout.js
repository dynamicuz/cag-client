"use client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {

   return (
      <>
         
  <Header type={"layout"} />
               <main>{children}</main>
               <Footer />
      </>
   );
}
