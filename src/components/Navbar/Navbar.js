"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/code.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Sobre", href: "#about-section" },
  { text: "Desafio", href: "#challenge-section" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image src={logo} width={128} height={32} alt="logo pessoal" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
