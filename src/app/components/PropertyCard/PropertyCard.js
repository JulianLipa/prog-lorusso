"use client";

import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/PropertyCard/PropertyCard.module.css";
import GalleryView from "@/app/components/GalleryView/GalleryView";
import PropertyBar from "@/app/components/PropertyBar/PropertyBar";
import { FaRegHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const PropertyCard = (data, loading) => {
  data = data.data;
  return (
    <div className={styles.property_card}>
      <div className={styles.hover_div}>
        <Link className="button subtitle" href={`/deptos/${data._id}`}><BsEye className="text-xl"/> Ver más</Link>
        <Link className="button subtitle" href=""><FaRegHeart className="text-xl" /></Link>
      </div>
      <div className={styles.gallery_div}>
        <GalleryView folderName={data.folderName} />
      </div>
      {!loading && <h2 className="subtitle text-2xl">{data.title}</h2>}
      {loading && <h2 className="subtitle"></h2>}
      <PropertyBar data={data} loadingState={loading} />
      {!loading && (
        <h2 className={` text-2xl ${styles.price}`}>u$d {data.price}</h2>
      )}
    </div>
  );
};

export default PropertyCard;
