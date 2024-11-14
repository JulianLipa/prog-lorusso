import React, { useState, useEffect } from 'react';
import "@/app/globals.css";
import styles from "@/app/page.module.css";

const FavouritesSection = ({ dataId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/getProductById?id=670000f4e2456acbac4a3865');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.response);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);*/

  useEffect(() => {
    console.log(dataId)
  },[dataId])

  return (
    <div>
        <h1>hola</h1>
    </div>
  );
};

export default FavouritesSection;
