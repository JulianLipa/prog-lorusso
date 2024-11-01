import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import styles from "@/app/page.module.css";
import "@/app/globals.css";
import Hero from "@/app/components/Hero/Hero"

export default function Home() {
  return (
    <div className="">
      <main className="main">
        <Hero />
      </main>
      <footer className=""></footer>
    </div>
  );
}
