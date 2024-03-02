"use client";
import { useEffect, useState, Dispatch, SetStateAction, createContext} from "react";

export type Theme = "dark" | "light" | null;

interface ContextProp {
  theme?:Theme,
  setTheme?:Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ContextProp>({});

export function ThemeProvider({children}:{children:React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    let localTheme:Theme = localStorage.getItem("theme") as Theme;
    if(localTheme != "dark" && localTheme != "light") {
      localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    if(!theme) return;
    setVariables(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const contextData = {
    theme,
    setTheme
  }

  return <ThemeContext.Provider value={contextData}>
    {children}
  </ThemeContext.Provider>
}

// export function useTheme():[Theme, Dispatch<SetStateAction<Theme>>] {
//   // 테마 커스텀 훅, setTheme 에 "dark" 또는 "light" 설정 시 알아서 적용.
//   // client 코드를 hydration으로부터 분리를 했는데, 이 코드에는 리렌더링이 작용중인 dispatch가 있으므로,
//   // use effect로 감쌌다.  

//   const [theme, setTheme] = useState<Theme>(null);

//   useEffect(() => {
//     let localTheme:Theme = localStorage.getItem("theme") as Theme;
//     if(localTheme != "dark" && localTheme != "light") {
//       localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//     }
//     setTheme(localTheme);
//   }, []);

//   useEffect(() => {
//     if(!theme) return;
//     setVariables(theme);
//     localStorage.setItem("theme", theme);
//     console.log("적용했따");
//   }, [theme]);

//   return [theme, setTheme];
// }

function setVariables(theme:Theme) {
  const html:HTMLElement | null = document.querySelector("html");
  if(!html || !theme) return; // 예외 처리
  html.dataset.theme = theme;
}