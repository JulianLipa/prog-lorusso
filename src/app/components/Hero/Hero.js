
import Image from "next/image";
import FilterSection from "@/app/components/FilterSection/FilterSection";

import styles from "@/app/page.module.css";
import "@/app/globals.css";

import { PiHandshake } from "react-icons/pi";
import Link from "next/link";

const Hero = ({deptos}) => {
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
              <button className={`${styles.windowDiv} ${styles.selected}`}>
                <PiHandshake />
                <p className="subtitle">Comprar</p>
              </button>
              <button className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Alquilar</p>
              </button>
              <button className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Vender</p>
              </button>
              <button className={styles.windowDiv}>
                <PiHandshake />
                <p className="subtitle">Tasar</p>
              </button>
            </div>

            <FilterSection deptos={deptos}/>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Hero;
