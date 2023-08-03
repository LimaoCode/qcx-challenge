import Link from "next/link";
import styles from "./userCard.module.css";
import Image from "next/image";

export default async function UserCard() {
  const response = await fetch("https://api.github.com/users/limaocode");
  const user = await response.json();

  return (
    <div className={styles.card}>
      <div className={styles.avatarAside}>
        <Image
          src={user.avatar_url}
          alt="logo"
          priority
          width={192}
          height={192}
          className={styles.avatar}
        />
        <Link href={user.html_url} target="_blank">
          <span>Visitar Perfil</span>
        </Link>
      </div>
      <div className={styles.dataAside}>
        <div className={styles.data}>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Repositórios:</h4>
            <span className={styles.dataValue}>{user.public_repos}</span>
          </div>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Seguidores:</h4>
            <span className={styles.dataValue}>{user.followers}</span>
          </div>
          <div className={styles.dataItem}>
            <h4 className={styles.dataText}>Seguindo:</h4>
            <span className={styles.dataValue}>{user.following}</span>
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
