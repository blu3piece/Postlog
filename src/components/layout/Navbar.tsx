"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import Image from "next/image";
import Postlog from "../../../public/Postlog.svg";
import { useThemeState } from "@/hooks/useThemeState";

export default function Navbar() {
  const { theme, setTheme } = useThemeState();

  const handleThemeChange = () => {
    if (!theme) return;
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  if (theme == null) return <></>;

  return (
    <div className="flex flex-wrap m-auto max-w-[--main-width] py-[32px] items-center justify-between">
      <Link className="flex text-[--black] text-2xl font-bold" href={"/"}>
        {/* <Image src={`${prefix}/favicon-128.png`} alt="favicon" width={32} height={32} style={{ borderRadius: 6 }}></Image> */}
        blu3fishez.<Image width={30} height={30} src={Postlog} alt={"Postlog"} /> 
      </Link>
      <div
        className="bg-transparent
          flex
          cursor-pointer
          items-center
          justify-center"
        onClick={handleThemeChange}
      >
        <div className="underline mx-2">
          <Link href={"https://github.com/blu3fishez/"}>
            Github
          </Link>
        </div>
        <div className="flex w-[30px] h-[30px] items-center justify-center">
          {!theme ? (
            <div className="">.</div>
          ) : theme == "dark" ? (
            <div key="light" className="animate-fadeout">
              <LightModeIcon className="flex text-yellow-500 w-[0.9em] h-[0.9em]"/>
            </div>
          ) : (
            <div key="dark" className="flex text-yellow-500 animate-fadeout">
              <DarkModeIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
