import { Theme, useThemeStore } from "@/store/useThemeStore";
import { useEffect, useState } from "react";


export function useThemeState() {
  const getStoreTheme = useThemeStore(state => state.getTheme);
  const setStoreTheme = useThemeStore(state => state.setTheme);  
  const [theme, setTheme] = useState<Theme | null>();

  useEffect(() => {
    setTheme(getStoreTheme());
  }, []);

  useEffect(() => {
    if(theme) setStoreTheme(theme);
  }, [theme]);

  return {theme, setTheme};
}