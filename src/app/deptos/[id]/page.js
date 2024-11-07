import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/deptos/[id]/page.module.css";

import DeptosComponent from "@/app/deptos/[id]/DeptosComponent";
import { getOneProductById } from "@/app/actions";

const Page = async ({ params }) => {
  const { id } = await params;  
  console.log(id)

  let data;

  try {
    const response = await getOneProductById(id);
    if (!response || !response.product) {
      return { notFound: true };
    }
    data = response.product;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { notFound: true };
  }

  return <DeptosComponent data={data}/>;
};

export default Page;
