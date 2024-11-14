import React from "react";

const FilterSectionGet = async () => {
  const response = await fetch("/api/getProducts");
  const data = await response.json();

  console.log(data);

  return <div>FilterSectionGet</div>;
};

export default FilterSectionGet;
