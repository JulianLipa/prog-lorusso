import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/deptos/[id]/page.module.css";

import DeptosComponent from "@/app/deptos/[id]/DeptosComponent";
import { getOneProductById } from "@/app/actions";

const Page = async ({ params }) => {
  const { id } = params;
  console.log(id)

  const response = await getOneProductById(id);
  const data = response.product;

  return <DeptosComponent data={data}/>;
};

export default Page;
