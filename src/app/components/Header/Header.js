"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import styles from "@/app/page.module.css";
import "@/app/globals.css";

const Header = () => {
  return (
    <section className={styles.headerSection}>
      <div className="flex">
        <Link href="">
          <HiOutlineMenu className="text-2xl" />
        </Link>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.svg"
            height={20}
            width={20}
            alt="Lorusso Servicios Inmobiliarios Logo"
          />
          <div>
            <h1 className="title">Lorusso</h1>
            <h2 className="subtitle">Servicios Inmobiliarios</h2>
          </div>
        </Link>
      </div>
      <div>
        <FaRegHeart className="text-xl" />
      </div>
    </section>
  );
};

export default Header;
