"use client";

import Link from "next/link";
import styles from "./userCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function UserCard({ user }) {
  const [repos, setRepos] = useState();
  const [favs, setFavs] = useState();

  async function getRepoData() {
    repos
      ? setRepos(null)
      : await fetch("https://api.github.com/users/limaocode/repos")
          .then((response) => response.json())
          .then((repos) => {
            setRepos(repos);
          });
  }

  async function getFavData() {
    favs
      ? setFavs(null)
      : await fetch("https://api.github.com/users/limaocode/starred")
          .then((response) => response.json())
          .then((favs) => {
            setFavs(favs);
          });
  }

  return (
    <div className={styles.card}>
      <div className={styles.aside}>
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
            <button
              className={styles.repositoryButton}
              onClick={() => getRepoData()}
            >
              {repos ? "Ocultar repositórios" : "Ver repositórios"}
            </button>
            <button
              className={styles.favoritesButton}
              onClick={() => getFavData()}
            >
              {favs ? "Ocultar favoritos" : "Ver favoritos"}
            </button>
          </div>
        </div>
      </div>

      {repos && (
        <div className={styles.repoList}>
          <h3>Lista dos repositórios</h3>
          <ul>
            {repos.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {favs && (
        <div className={styles.favList}>
          <h3>Lista dos favoritos</h3>
          <ul>
            {favs.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
