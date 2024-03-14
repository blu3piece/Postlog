

export default function ThemeCheck() {
  const codeThemeCheck = `
    let localTheme = localStorage.getItem("theme");
    if(!localTheme) {
      localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      localStorage.setItem("theme", localTheme);
    }
    
    const html = document.querySelector("html");
    html.dataset.theme = localTheme;
  `;
  return <script type="text/javascript" dangerouslySetInnerHTML={{ __html: codeThemeCheck}}></script>
}