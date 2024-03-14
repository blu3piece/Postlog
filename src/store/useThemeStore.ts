"use client";

import { useEffect } from "react";
import { create } from "zustand";

export type Theme = "dark" | "light";

type ThemeStore = {
  theme? : Theme;
  setTheme : (theme:Theme) => void;
  getTheme : () => Theme | null;
}

const THEME_KEY = "theme";

function applyDataTag(theme:Theme) {
  const html:HTMLElement | null = document.querySelector("html");
  if(!html || !theme) return; // 예외 처리
  html.dataset.theme = theme;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  getTheme: () => {
    if(typeof window === "undefined") {
      return null;
    }

    let theme:Theme | undefined = localStorage.getItem(THEME_KEY) as Theme | undefined;

    if(!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem(THEME_KEY, theme);
    }

    applyDataTag(theme);

    return theme;
  },
  setTheme:(t:Theme) => {
    console.log(t);
    localStorage.setItem(THEME_KEY, t);
    set(state => ({theme:t}));
    applyDataTag(t);
  }
}));