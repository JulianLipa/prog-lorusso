"use client"
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/deptos/[id]/page.module.css";
import PropertyBar from "@/app/components/PropertyBar/PropertyBar";
import GalleryView from "@/app/components/GalleryView/GalleryView";
import { useAppContext } from "@/app/contexts/AppContexts";
import { FaRegHeart } from "react-icons/fa";

const DeptosComponent = ({data}) => {
  const { favourites, setFavourites } = useAppContext();

  const addFavourite = (data) => {
    if (!favourites.some((favourite) => favourite._id === data._id)) {
      setFavourites([...favourites, data]);
    }
  };

  return (
    <div>
        <main className={styles.main_deptos}>
        <div className={styles.deptos_header}>
          <Link className={`subtitle ${styles.button_deptos}`} href="/">&lt; Volver</Link>
          <Link className={`subtitle ${styles.button_deptos}`} href="/">Inicio</Link>
          <Link className={`subtitle ${styles.button_deptos}`} href="#">Propiedades</Link>
          {data.amb === "1" && (<Link className={`subtitle ${styles.button_deptos}`} href="#">{data.amb} Ambiente</Link>)}
          {data.amb !== "1" && (<Link className={`subtitle ${styles.button_deptos}`} href="#">{data.amb} Ambientes</Link>)}
          <Link className={`subtitle ${styles.button_deptos}`} href="#">{data.title}</Link>
        </div>

        <section className={styles.section_property}>
          <div className={styles.div_images}><GalleryView className={styles.div_images_gallery} folderName={data.folderName}/></div>
          <div className={styles.div_text}>
            <div className="flex items-center gap-3">
              <h2 className="title text-3xl main-color">{data.title}</h2>
              <div><FaRegHeart onClick={()=>addFavourite(data)} className={`text-2xl ${styles.favouriteIcon}`}/></div>
            </div>
            <PropertyBar data={data} loadingState={false}/>
            <p className={`subtitle ${styles.subtitle_p}`}>{data.p}</p>
            <h2 className={`title text-2xl ${styles.price}`}>u$d {data.price}</h2>
            <Link className="subtitle button" href="#">Programar visita</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DeptosComponent