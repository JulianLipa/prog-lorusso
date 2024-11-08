import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";
import axios from "axios";
import mongoose from "mongoose";

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

  let objectId;
  try {
    objectId = new mongoose.Types.ObjectId(id.toString());
  } catch (error) {
    console.error("Invalid ObjectId:", error.message);
    return { product: null };
  }

  try {
    const product = await Product.findById(objectId);
    return { product: product ? JSON.parse(JSON.stringify(product)) : null };
  } catch (error) {
    console.error("Error fetching product by id:", error.message);
    return { product: null };
  }
};




export { getAllProductsDB, getOneProductById };
