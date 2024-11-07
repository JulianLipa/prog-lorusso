import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";
import axios from "axios";

const getAllProductsDB = async () => {
  await dbConnect();
  try {
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
};

const getOneProductById = async (id) => {
  await dbConnect();
  try {
    const product = await Product.findById(id);
    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { product: null };
  }
};


export { getAllProductsDB, getOneProductById };
