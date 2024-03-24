import "./globals.css";
import 'prismjs/themes/prism-tomorrow.css';

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SideMenu from "@/components/layout/SideMenu";
import Thumbnail from "../../public/ogimage.png";
import ThemeCheck from "./ThemeCheck";

const sansFont = Noto_Sans_KR({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase:new URL("https://blu3fishez.github.io/markdown-blog"),
  title:"blu3fishez's Postlog",
  description: "blu3fishez's Postlog",
  openGraph:{
    siteName:"blu3fishez's Postlog",
    title:"blu3fishez's Postlog",
    description:"blu3fishez's Postlog",
    images:Thumbnail.src,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="ko">
      <head>
        <ThemeCheck />
      </head>
      <body className={`${sansFont.className} transition duration-700`}>
        <SideMenu />
        <div className="block">
          <div className="min-h-[100vh]">
            <Navbar />
            <div className="w-[--main-width] mobile:w-[90vw] m-auto">
              <div>
                {children}
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </body>
    </html>
  );
}