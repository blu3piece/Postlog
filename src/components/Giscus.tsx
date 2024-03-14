"use client";

import { useThemeStore } from "@/store/useThemeStore";
import Giscus from "@giscus/react";

export default function GiscusComponent() {
  const getTheme = useThemeStore(state => state.getTheme);
  const theme = getTheme();

  if(theme == null) return <></>;

  return <Giscus
    repo="chayhan/Postlog"
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
