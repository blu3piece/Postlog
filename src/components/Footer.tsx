import { prefix } from "@/config";
import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterParams {
  className?:string
}

export default function Footer(params:FooterParams) {
  return <footer className={`${styles.footer} ${params.className}`}>
    <div className={styles.footerWrap}>
      <p className={styles.supportLog}>
        Support me by following on 
        <a href="https://github.com/chayhan">
          <Image className={styles.githubLogo} src={`${prefix}/github-icon.png`} alt="favicon" width={16} height={16} />
          <span style={{textDecorationLine: "underline"}}>github</span>
        </a>
      </p>
      <p className={styles.copyright}>© 2023 chayhan, Powered by github.io</p>
    </div>
  </footer>
}
