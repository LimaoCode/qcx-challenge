import UserCard from "@/components/UserCard";
import styles from "./page.module.css";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.github.com/users/limaocode");
  const user = await response.json();

  return (
    <main className={styles.main}>
      <section id="home-section" className={styles.home}>
        <h1>Desenvolvedor Front End</h1>
        <Link href="https://github.com/qcx/desafio-frontend" target="_blank">
          <h3>Desafio Qconcursos.com</h3>
        </Link>
        <div className={styles.divIcons}>
          <Link href="https://www.instagram.com/joao.svg/" target="_blank">
            <InstagramLogoIcon className={styles.icon} />
          </Link>
          <Link href="https://www.linkedin.com/in/limaocode/" target="_blank">
            <LinkedInLogoIcon className={styles.icon} />
          </Link>
          <Link href="https://github.com/LimaoCode" target="_blank">
            <GitHubLogoIcon className={styles.icon} />
          </Link>
        </div>
      </section>

      <article id="about-section" className={styles.about}>
        <h2>Sobre</h2>
        <h4>
          Salve, tudo bem? Eu sou João Vitor (também conhecido como Limão).
        </h4>
        <p>
          Estudo sobre software desde 2016, principalmente o ambiente Web HTML,
          CSS, JS, React e tenho conhecimento sobre Bancos de Dados Relacionais.
        </p>
        <p>
          Atualmente, trabalho como Desenvolvedor Front End e estou me
          concentrando em melhorar minhas habilidades técnicas e pessoais, para
          alcançar um papel de referência técnica em meu time. Meu objetivo é
          liderar pessoas, construir novos conhecimentos e compartilhar o que
          sei onde quer que eu vá, independentemente da tecnologia com a qual eu
          precise trabalhar.
        </p>
        <p>
          No meu tempo livre, gosto de jogar online com amigos, ver live streams
          e vídeos no youtube, estudar sobre outras culturas e tentar aprender
          novas línguas. Uma coisa muito legal: Grande parte do meu dia estou
          escutando músicas Russas ou Chinesas, a fonética dessas línguas me
          agrada muito, tenho muita vontade de conhecer esses países no futuro!
        </p>
        <p>
          Sempre estou aberto para conversar sobre novas possibilidades em
          Desenvolvimento Front End, entretanto prefiro ficar remoto com a
          possibilidade de me mudar quando possível em um momento confortável
          para mim.
        </p>
      </article>

      <section id="challenge-section" className={styles.challenge}>
        <h2>Desafio</h2>
        <UserCard user={user} />
      </section>
    </main>
  );
}
