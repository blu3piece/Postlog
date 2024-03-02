import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { prefix, isDebug, SITE_TITLE_SUFFIX } from "@/config";
import 'prismjs/themes/prism-tomorrow.css';
import styles from "./layout.module.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import SideMenu from "@/components/SideMenu";
import Toc from "@/components/Toc";
import { ThemeProvider } from "@/ts/theme";

const font = Noto_Sans_KR({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase:new URL("https://chayhan.github.io/markdown-blog"),
  title:SITE_TITLE_SUFFIX,
  description: "개발자 chayhan 의 블로그 입니다.",
  openGraph:{
    siteName:SITE_TITLE_SUFFIX,
    title:"chay의 깃허브 블로그",
    description:"chayhan.github.io 블로그",
    images:`${prefix}/ogimage.png`,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const codeThemeCheck = `
    let localTheme = localStorage.getItem("theme");
    if(!localTheme) {
      localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem("theme", localTheme);
    }
    
    const html = document.querySelector("html");
    html.dataset.theme = localTheme;
  `;
  return (
    <html lang="en" suppressHydrationWarning={isDebug}>
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: codeThemeCheck}}></script>
      </head>
      
      <body className={`${font.className} ${styles.layout}`}>
        <div className={styles.sidebar}>
          <SideMenu />
        </div>
        <div className={styles.main}>
          <div className={styles.body}>
            <ThemeProvider>
              <div className={styles.navbar}>
                <Navbar />
              </div>
              <div className={styles.content}>
                <div className={styles.article}>
                  {children}
                </div>
                <Toc />
              </div>
            </ThemeProvider>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
