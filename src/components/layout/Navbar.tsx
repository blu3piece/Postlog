"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { useThemeState } from "@/hooks/useThemeState";

export default function Navbar() {
  const { theme, setTheme } = useThemeState();

  const handleThemeChange = () => {
    if (!theme) return;
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  if (theme == null) return <></>;

  return (
    <div className="flex flex-wrap m-auto w-[--main-width] pt-[16px] pb-[16px] items-center justify-end">
      <Link className="hidden text-[--black] text-3xl font-black" href={"/"}>
        Chayhan.
      </Link>
      <div
        className="bg-transparent
          text-yellow-500
          border-yellow-500
          flex
          rounded-full
          border-2
          cursor-pointer
          items-center
          justify-center
          w-[30px]
          h-[30px]"
        onClick={handleThemeChange}
      >
        {!theme ? (
          <div className="">loading...</div>
        ) : theme == "dark" ? (
          <div key="light" className="flex animate-fadeout">
            <LightModeIcon className="flex w-[0.9em] h-[0.9em]"/>
          </div>
        ) : (
          <div key="dark" className="flex animate-fadeout">
            <DarkModeIcon />
          </div>
        )}
      </div>
    </div>
  );
}
