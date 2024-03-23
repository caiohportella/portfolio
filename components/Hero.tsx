import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { PageInfo as PageInfoType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfoType;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `${pageInfo?.name}`,
      "Desenvolvedor Fullstack",
      "Desenvolvedor Mobile",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 2,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile pic"
        className="h-32 w-32 rounded-full object-cover relative mx-auto"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experiência</button>
          </Link>

          <Link href="#courses">
            <button className="heroButton">Cursos</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>

          <Link href={process.env.NEXT_PUBLIC_BASE_URL + "CV.pdf"} target={"_blank"} download>
            <button className="heroButton">Baixar CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
