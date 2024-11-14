import React from "react";
import FilteredData from "@/app/deptos/FilteredData";
import { getAllProductsDB } from "@/app/actions";

const page = async () => {
  const response = await getAllProductsDB();

  return <FilteredData data={response} />;
};

export default page;
