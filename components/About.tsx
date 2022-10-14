import { motion } from "framer-motion";
import React from "react";
import picture from "../public/images/aboutpic.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col text-center md:text-left md:flex-row relative max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={picture.src}
        alt="Caio Portella"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Conheça{" "}
          <span className="underline decoration-[#F7AB0A]/50">um pouco mais</span>{" "}
          sobre mim
        </h4>
        <p className="text-base">
          Sou graduando em Ciência da Computação pela PUCSP procurando por
          experiências profissionais e aprendizado. Tenho amplo interesse em
          tecnologia, assim em como todas as portas que ela pode abrir. <br /><br />
          Sou
          apaixonado por música, especialmente rock e metal. Também toco
          guitarra em uma banda chamada Exorcise. Além de música, xadrez, video
          games e livros são meus hobbies favoritos. Ademais, eu ocasionalmente
          escrevo narrativas e poemas autorais no Instagram. 
        </p>
      </div>
    </motion.div>
  );
};

export default About;
