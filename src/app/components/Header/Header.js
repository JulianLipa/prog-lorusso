"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import "@/app/globals.css";
import styles from "@/app/page.module.css";
import { useAppContext } from "@/app/contexts/AppContexts";
import FavouritesSection from "./FavouritesSection";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

const Header = () => {
  const { favourites, setFavourites } = useAppContext();
  console.log(favourites);
  const [confirmRemoveId, setConfirmRemoveId] = useState(null);

  const handleRemoveRequest = (_id) => {
    setConfirmRemoveId(_id);
  };

  const confirmRemove = (_id) => {
    setFavourites(favourites.filter((favourite) => favourite._id !== _id));
    setConfirmRemoveId(null);
  };

  const cancelRemove = () => {
    setConfirmRemoveId(null);
  };

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
      <div className={styles.favouriteIcon}>
        {favourites.length > 0 && (<div className={styles.favouriteIconDot}><FaRegHeart className="text-2xl"/><div className={styles.dot}></div></div>)}
        {favourites.length == 0 && (<div><FaRegHeart className="text-2xl"/></div>)}
        <section className={styles.hoverFavouriteSection}>
        <p className={`title text-xl ${styles.hoverTitle}`}>Propiedades favoritas</p>
        {favourites.length == 0 && <p className="subtitle text-sm">No añadiste ninguna propiedad como favorita</p>}
          {favourites.length > 0 &&
            favourites.map((favourite, index) => (
              <Link
                key={index}
                className={styles.favouriteDiv}
                href={`/deptos/${favourite._id}`}
              >
                {confirmRemoveId === favourite._id && (
                  <div className={styles.confirmRemove}>
                    <p className="text-xs">Desea remover esta propiedad de favoritos?</p>
                    <button
                      className="button text-sm"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        confirmRemove(favourite._id);
                      }}
                    >
                      <IoTrashOutline />Remover
                    </button>
                    <button
                      className="button text-sm"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        cancelRemove();
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
                <div className="flex"><Image
                  src={`/images/deptos/${favourite.folderName}/${favourite.folderName}-1.jpg`}
                  alt={`Property image 1`}
                  width={500}
                  height={300}
                  className={"imageShowed"}
                />
                <div className={styles.hoverFavouriteText}>
                  <p className="title">{favourite.title}</p>
                  <h2 className={`subtitle ${styles.price}`}>
                    u$d {favourite.price}
                  </h2>
                </div>
                </div>
                <IoTrashOutline
                className={`text-5xl ${styles.removeIcon}`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleRemoveRequest(favourite._id);
                  }}
                />
              </Link>
            ))}
        </section>
      </div>
    </section>
  );
};

export default Header;
