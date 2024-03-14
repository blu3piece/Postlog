import "./globals.css";
import 'prismjs/themes/prism-tomorrow.css';

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SideMenu from "@/components/layout/SideMenu";
import Toc from "@/components/Toc";
import ThemeCheck from "./ThemeCheck";

const font = Noto_Sans_KR({ subsets: ["latin", "latin-ext"] });


export const metadata: Metadata = {
  metadataBase:new URL("https://chayhan.github.io/markdown-blog"),
  title:"bluewhistle12 blog",
  description: "개발자 chayhan 의 블로그 입니다.",
  openGraph:{
    siteName:"bluewhistle12 blog",
    title:"Home",
    description:"blog of bluewhitle12",
    images:"ogimage.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="ko">
      <head>
        <ThemeCheck />
      </head>
      <body className={font.className}>
        <SideMenu />
        <div className="block ml-[--sidebar-width]">
          <div className="min-h-[100vh]">
            <Navbar />
            <div className="w-[--main-width] flex flex-row justify-between m-auto">
              <div className="w-[--article-width]">
                {children}
              </div>
              <Toc />
            </div>
          </div>

          <Footer />

        </div>
      </body>
    </html>
  );
}