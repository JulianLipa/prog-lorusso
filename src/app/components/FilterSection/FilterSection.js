import React, { useState } from "react";
import styles from "@/app/page.module.css";
import filterStyles from "@/app/components/FilterSection/FilterSection.module.css";
import { LuRuler } from "react-icons/lu";
import { LiaToiletSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useAppContext } from "@/app/contexts/AppContexts";
import FilterComponent from "@/app/components/FilterComponent/FilterComponent";

const FilterSection = () => {
  const { filter, setFilter } = useAppContext();
  const [formData, setFormData] = useState({
    price: "",
    amb: "",
    bath: "",
  });

  const [activeInput, setActiveInput] = useState(""); // State for active input
  const [showFilteredResults, setShowFilteredResults] = useState(false); // State to control rendering of results


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilteredResults(true);
  };

  const filterFunction = () => {
    setFilter([...filter, {formData}]);
  }


  return (
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
            className={activeInput === "price" ? filterStyles.activeInput : ""}
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
        <button type="submit" className="button" onClick={() => filterFunction()}>
          Buscar
        </button>
      </form>
    </section>
  );
};

export default FilterSection;