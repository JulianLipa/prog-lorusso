import React from "react";
import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import styles from "@/app/deptos/page.module.css";

const FilteredData = async ({ data }) => {
  if (!data || !data.products) return <p>No data available</p>;

  const filteredData1Amb = data.products.filter(
    (product) => product.amb === "1"
  );
  const filteredData2Amb = data.products.filter(
    (product) => product.amb === "2"
  );
  const filteredData3Amb = data.products.filter(
    (product) => product.amb === "3"
  );

  return (
    <div className={styles.mainDiv}>
      <h2 className={`title text-3xl ${styles.marginAmb}`}>Todas las propiedades</h2>
      <section>
      <div className={styles.marginAmb}>
        <h2 className={`title text-xl ${styles.marginAmb2}`}>1 Ambiente</h2>
        <div className="flex flex-wrap gap-5">
          {filteredData1Amb.length > 0 &&
            filteredData1Amb.map((product, index) => (
              <PropertyCard key={index} data={product} />
            ))}
        </div>
      </div>

      <div className={styles.marginAmb}>
        <h2 className={`title text-xl ${styles.marginAmb2}`}>2 Ambientes</h2>
        <div className="flex flex-wrap gap-5">
          {filteredData1Amb.length > 0 &&
            filteredData2Amb.map((product, index) => (
              <PropertyCard key={index} data={product} />
            ))}
        </div>
      </div>

      <div className={styles.marginAmb}>
        <h2 className={`title text-xl ${styles.marginAmb2}`}>3 Ambientes</h2>
        <div className="flex flex-wrap gap-5">
          {filteredData1Amb.length > 0 &&
            filteredData3Amb.map((product, index) => (
              <PropertyCard key={index} data={product} />
            ))}
        </div>
      </div>
      </section>
    </div>
  );
};

export default FilteredData;
