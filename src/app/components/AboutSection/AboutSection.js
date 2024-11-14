import React from 'react'
import Image from 'next/image'
import styles from "@/app/page.module.css";

const AboutSection = () => {
  return (
    <div className={`flex justify-center mt-7 ${styles.aboutDiv}`}>
        <Image
            src={"/images/about.png"}
            alt={`About us Image`}
            width={400}
            height={200}
          />
          <div className="ml-6 w-2/6">
            <h2 className="title text-xl">Nuestra Historia</h2>
            <p className="subtitle font-extralight  w-full mb-5 mt-5">Somos una <b className="font-semibold">inmobiliaria familiar</b> ubicada en Catalinas Sur, La Boca 
            con amplia trayectoria y reconocimiento en <b className="font-semibold">operaciones inmobiliarias</b>.</p>

            <p className="subtitle  w-full mb-5">Nos enorgullece ser parte de la <b className="font-semibold">comunidad de La Boca</b>, donde hemos establecido relaciones duraderas basadas en la confianza y el compromiso.</p>
            <p className="subtitle  w-full">Nuestra experiencia de décadas en el <b className="font-semibold">sector inmobiliario</b> nos ha permitido  adaptarnos a los cambios del mercado con agilidad y eficacia.</p>
          </div>
        </div>
  )
}

export default AboutSection