"use client";
import { ThemeContext, ThemeProvider } from "@/ts/theme";
import Giscus from "@giscus/react";
import { useContext, useEffect } from "react";

export default function GiscusComponent() {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log("test from giscus");
  return !theme ? "loading..." : <Giscus
    repo="chayhan/markdown-blog"
    repoId="R_kgDOKUiJsQ"
    category="comments"
    categoryId="DIC_kwDOKUiJsc4CaU5s"

    strict="0"
    reactionsEnabled="1"

    emitMetadata="0"

    mapping="pathname"
    loading="lazy"
    lang="ko"

    theme={theme == "dark" ? "noborder_dark" : "noborder_light"}
    
    
  />;
}
