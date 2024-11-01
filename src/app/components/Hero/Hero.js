"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/app/page.module.css";
import "@/app/globals.css";

import { PiHandshake } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  const [windowsCategories, setwindowsCategories] = useState([]);

  useEffect(() => {
    const windowsCategoriesArray = [
      { id: 1, category: "Comprar", iconSrc: "/images/icons/comprar.svg" },
      { id: 2, category: "Alquilar", iconSrc: "/images/icons/alquilar.svg" },
      { id: 3, category: "Vender", iconSrc: "/images/icons/vender.svg" },
      { id: 4, category: "Tasar", iconSrc: "/images/icons/tasar.svg" },
    ];
    console.log(windowsCategoriesArray);
    setwindowsCategories(windowsCategoriesArray);
  }, []);

  return (
    <section className={styles.heroSection}>
      <section className="">
        <div className={styles.heroDiv}>
          <h3 className="subtitle">
            Te ayudamos a encontrar tu <b className="title">nuevo hogar</b>
          </h3>
          <h4 className="subtitle">
            Somos una inmobiliaria familiar ubicada en el pintoresco barrio de
            Catalinas Sur.
          </h4>
          <section className={styles.windowsSection}>
            <div className={styles.windowsDiv}>
              <Link href={""} className={`${styles.windowDiv} ${styles.selected}`}>
                <PiHandshake />
                <p className="subtitle">Comprar</p>
              </Link>
              <Link href={""} className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Alquilar</p>
              </Link>
              <Link href={""} className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Vender</p>
              </Link>
              <Link href={""} className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Tasar</p>
              </Link>
            </div>
            <section className={styles.filterSection}>
              <h4 className="subtitle">Filtros</h4>
              <h4 className="subtitle">Buscá de acuerdo a tus necesidades</h4>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Hero;
