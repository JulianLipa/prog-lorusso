import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/page.module.css";
import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import { getAllProductsDB } from "@/app/actions";

const PropertiesDestacadas = async () => {
  const response = await getAllProductsDB();

  return (
    <section className={styles.propertyTitle}>
      <h3 className="title text-2xl main-color">Propiedades destacadas</h3>
      <div className={styles.propertyDiv}>
        {(response) && (
          <div className={styles.propertySection}>
            <PropertyCard data={response.products[0]} loading={true} />
            <PropertyCard data={response.products[1]} loading={true} />
            <PropertyCard data={response.products[2]} loading={true} />
          </div>
        )}
        <Link className={`button subtitle ${styles.buttonProperties}`} href={"/deptos"}>Ver todas las propiedades</Link>
      </div>
    </section>
  );
};

export default PropertiesDestacadas;
