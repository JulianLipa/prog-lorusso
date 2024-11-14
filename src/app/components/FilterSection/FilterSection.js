"use client";
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import filterStyles from "@/app/components/FilterSection/FilterSection.module.css";
import { LuRuler } from "react-icons/lu";
import { LiaToiletSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "@/app/contexts/AppContexts";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const FilterSection = ({ deptos }) => {
  const { filter, setFilter } = useAppContext();
  const [formData, setFormData] = useState({
    price: "",
    amb: "",
    bath: "",
  });

  const [activeInput, setActiveInput] = useState("");
  const [showFilteredResults, setShowFilteredResults] = useState(false);
  const [filteredDeptos, setFilteredDeptos] = useState([]);

  const formatPrice = (value) => {
    let cleanedValue = value.replace(/\D/g, "");
    let formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedValue;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      setFormData({
        ...formData,
        [name]: formatPrice(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilteredResults(true);
    filterFunction();
  };

  const filterFunction = () => {
    const filteredResults = deptos.filter((depto) => {
      const priceMatch = formData.price ? depto.price <= formData.price : true;
      const ambMatch = formData.amb ? depto.amb === formData.amb : true;
      const bathMatch = formData.bath ? depto.bath === formData.bath : true;

      return priceMatch && ambMatch && bathMatch;
    });

    setFilteredDeptos(filteredResults);
  };

  return (
    <div>
      <section className={styles.filterSection}>
        <p className="title">Filtros</p>
        <p className="subtitle">Buscá de acuerdo a tus necesidades</p>

        <form
          className={`flex justify-center subtitle ${filterStyles.filterForm}`}
          onSubmit={handleSubmit}
        >
          <div className={filterStyles.inputContainer}>
            <p className={filterStyles.inputIcon}>$</p>
            <input
              inputMode="numeric"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Precio"
              autoComplete="off"
              maxLength={9}
              className={
                activeInput === "price" ? filterStyles.activeInput : ""
              }
            />
          </div>
          <div className={filterStyles.inputContainer}>
            <LuRuler className={filterStyles.inputIcon} />
            <select
              name="amb"
              value={formData.amb}
              onChange={handleChange}
              className={activeInput === "amb" ? filterStyles.activeInput : ""}
            >
              <option value="" disabled>
                Ambientes
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <IoIosArrowDown className={filterStyles.selectIcon} />
          </div>

          <div className={filterStyles.inputContainer}>
            <LiaToiletSolid className={filterStyles.inputIcon} />
            <select
              name="bath"
              value={formData.bath}
              onChange={handleChange}
              className={activeInput === "bath" ? filterStyles.activeInput : ""}
            >
              <option value="" disabled>
                Baño/s
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <IoIosArrowDown className={filterStyles.selectIcon} />
          </div>
          <button
            type="submit"
            className="button"
            onClick={() => filterFunction()}
          >
            Buscar
          </button>
        </form>
      </section>
      {filteredDeptos.length > 0 && (
        <div className={styles.filteredResults}>
          <div>
            <p className={`subtitle mb-2 text-base`}>Resultados ({filteredDeptos.length}):</p>
            <div className={styles.filteredDiv}>
            {filteredDeptos.length > 0 &&
            filteredDeptos.map((filtered, index) => (
              <Link
                key={index}
                href={`/deptos/${filtered._id}`}
              >
                <div className="flex"><Image
                  src={`/images/deptos/${filtered.folderName}/${filtered.folderName}-1.jpg`}
                  alt={`Property image 1`}
                  width={500}
                  height={300}
                  className={`imageShowed ${styles.imageShowed}`}
                />
                <div className={styles.filteredText}>
                  <p className="title text-xl mb-2">{filtered.title}</p>
                  <h2 className={`subtitle ${styles.price}`}>
                    u$d {filtered.price}
                  </h2>
                </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
