"use client";

import { ThemeContext, ThemeProvider } from "@/ts/theme";
import styles from "./Navbar.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import React, { useContext } from "react";

export default function Navbar() {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log("test from navbar");
  if(!setTheme) return <div>
    loading...
  </div>
  return (
    <div className={styles.nav}>  
      {/* 우측에 search 바, 다크/라이트 모드 토글 등 구현 */}
      <Link className={styles.home} href={"/"}>
        Chayhan.
      </Link>
      {theme == "dark" ? (
        <div
          className={`${styles.themeChanger} ${styles.dark}`}
          onClick={() => setTheme("light")}
        >
          {" "}
          <LightModeIcon />{" "}
        </div>
      ) : (
        <div
          className={`${styles.themeChanger} ${styles.dark}`}
          onClick={() => setTheme("dark")}
        >
          {" "}
          <DarkModeIcon />{" "}
        </div>
      )}
    </div>
  );
}