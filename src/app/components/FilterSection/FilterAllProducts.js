import React from "react";

const FilterAllProducts = async (formData) => {
  console.log(formData);

  const response = await fetch("/api/getPhotos");
  const data = await response.json();

  console.log(data);

  return <div>FilterAllProducts</div>;
};

export default FilterAllProducts;
