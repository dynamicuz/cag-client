"use client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";



export default function RootLayout({ children, setIsOpen }) {
   return (
      <>
         <Header type={"layout"} setIsOpen={setIsOpen} />
         <main>{children}</main>
         <Footer />
      </>
   );
}
