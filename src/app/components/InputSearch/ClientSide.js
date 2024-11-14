"use client";
import React, { useState, useEffect } from "react";

const ClientSide = ({ data }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data.products)) {
      const filteredData = data.products.filter(
        (product) => product.amb === "3" && product.bath === "1"
      );
      setFiltered(filteredData);
      console.log(filteredData);
    } else {
      console.error(
        "Expected 'products' to be an array, but got:",
        data?.products
      );
    }
  }, [data]);

  return (
    <div>
        <p>No products found</p>
    </div>
  );
};

export default ClientSide;
