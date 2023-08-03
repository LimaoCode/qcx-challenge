import Link from "next/link";
import styles from "./userCard.module.css";
import Image from "next/image";
import logo from "@/assets/code.png";

export default function UserCard() {
  return (
    <div className={styles.card}>
      <div className={styles.avatarAside}>
        <Image src={logo} alt="logo" className={styles.avatar} />
        <Link href="#">
          <span>Visitar Perfil</span>
        </Link>
      </div>
      <div className={styles.dataAside}>
        <div className={styles.data}>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Repositórios:</h4>
            <span className={styles.dataValue}>15</span>
          </div>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Seguidores:</h4>
            <span className={styles.dataValue}>15</span>
          </div>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Seguindo:</h4>
            <span className={styles.dataValue}>15</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.repositoryButton}>Ver repositórios</button>
          <button className={styles.favoritesButton}>Ver favoritos</button>
        </div>
      </div>
    </div>
  );
}
