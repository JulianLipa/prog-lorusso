import { getOneProductById } from "@/app/actions";
import DeptosComponent from "@/app/deptos/[id]/DeptosComponent";
import "@/app/globals.css";
import styles from "@/app/deptos/[id]/page.module.css";

const Page = async ({ params }) => {
  const { id } = await params;
  
  let data = null;
  let error = null;

  try {
    const response = await getOneProductById(id);
    if (response && response.product) {
      data = response.product;
    } else {
      error = "Product not found";
    }
  } catch (err) {
    error = "Error fetching product data";
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <DeptosComponent data={data} />;
};

export default Page;
