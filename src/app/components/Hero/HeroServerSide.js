import { getAllProductsDB } from "@/app/actions";
import Hero from "./Hero";

const HeroServerSide = async () => {
  const response = await getAllProductsDB();
  return <div><Hero deptos={response.products}/></div>;
};

export default HeroServerSide;
