import Link from "next/link";
import Image from "next/image";

import { HiOutlineMenu } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

import styles from "@/app/page.module.css";
import "@/app/globals.css";

import Hero from "@/app/components/Hero/Hero";
import PropertiesDestacadas from "./components/PropertiesDestacadas/PropertiesDestacadas";
import InputSearch from "@/app/components/InputSearch/InputSearch";
import HeroServerSide from "./components/Hero/HeroServerSide";
import AboutSection from "./components/AboutSection/AboutSection";

export default function Home() {

  return (
      <main className="main">
        <HeroServerSide />
        <PropertiesDestacadas />
        <AboutSection />
      </main>
  );
}
