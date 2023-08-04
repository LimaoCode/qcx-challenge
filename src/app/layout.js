import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";

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
        <Navbar />
        {children}
        <footer className={`footer`}>
          <h5 className={`footerContent`}>
            Desafio Desenvolvedor Front Qconcursos.com
          </h5>
        </footer>
      </body>
    </html>
  );
}
