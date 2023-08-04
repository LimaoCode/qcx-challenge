import Image from "next/image";
import "./globals.css";
import styles from "./layout.module.css";
import logo from "@/assets/code.png";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "QCX - Challenge",
  description: "Frontend Challenge - Qconcursos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="#home-section" className={styles.menuIcon}>
              <Image src={logo} width={128} height={32} alt="logo pessoal" />
            </Link>

            <ul className={styles.menuList}>
              <Link href="#home-section" className={styles.menuListItem}>
                Home
              </Link>
              <Link href="#about-section" className={styles.menuListItem}>
                Sobre
              </Link>
              <Link href="#challenge-section" className={styles.menuListItem}>
                Desafio
              </Link>
            </ul>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <h5 className={styles.footerContent}>
            Desafio Desenvolvedor Front Qconcursos.com
          </h5>
        </footer>
      </body>
    </html>
  );
}
