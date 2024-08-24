"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import style from "./nav.module.scss";
import { scrollTosection } from "@/helpers/healper";
import { infoType } from "@/types/info";
import MAJED from "@/data/majed";
const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixeNav, setFixNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 70) {
        setFixNav(true);
      } else {
        setFixNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleToggleMenu = function () {
    setToggleMenu((prev) => !prev);
    document.body.style.overflow = !toggleMenu ? "hidden" : "auto";
  };
  const { information } = MAJED;
  return (
    <nav
      className={`${style.nav} ${fixeNav ? style.fixed : ""}`}
      style={{
        background: toggleMenu ? "#000" : "",
        backdropFilter: toggleMenu ? "unset" : "",
      }}
    >
      <div className={style.inner}>
        <div className={style.logo} onClick={() => scrollTosection("app")}>
          <Image
            src={information.logo}
            alt={information.full_name}
            width={50}
            height={50}
          />
          {/* {fixeNav && <span>{props.logo_name}</span>} */}
        </div>
        <div className={style.menu}>
          <a href={information.github} target="_blank">
            <Image
              src={information.github_logo}
              alt=""
              width={33}
              height={33}
            />
          </a>
          <a href={information.linkedin} target="_blank">
            <Image
              src={information.linkedin_logo}
              alt=""
              width={25}
              height={25}
            />
          </a>
          <a href={information.x} target="_blank">
            <Image src={information.x_logo} alt="" width={25} height={25} />
          </a>
          <div
            className={`${style["nav-menu-container"]}  ${
              toggleMenu ? style["open-menu"] : style["close-menu"]
            }`}
            onClick={handleToggleMenu}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
