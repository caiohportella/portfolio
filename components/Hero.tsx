import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Olá! Sou o Caio H. Portella", "Estudante", "Desenvolvedor Frontend"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover overflow-hidden">
        <Image
            src="/images/pp.jpg"
            // layout="responsive"
            width={724}
            height={965}
            objectFit="cover"
            alt="profile pic"
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