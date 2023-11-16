import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profile from "../public/images/pp.jpg";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Olá! Sou o Caio H. Portella",
      "Desenvolvedor Frontend",
      "Desenvolvedor Mobile",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative bottom-[3rem] h-32 w-32 mx-auto overflow">
        <motion.img
          initial={{
            y: -400,
            opacity: 0,
          }}
          whileInView={{
            y: 2,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          src={profile.src}
          alt="profile pic"
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Estudante de Ciência da Computação
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
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

          <Link href="#skills">
            <button className="heroButton">Cursos</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
          <a href="/CV.pdf" download>
            <button className="heroButton">Baixar CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
