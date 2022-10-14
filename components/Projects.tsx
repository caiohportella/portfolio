/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import React from "react";

import orderapp from "../public/images/orderapp-resize.png";
import nlw from "../public/images/nlw.jpg";

type ProjectsProps = {
  projects: {
    id: number;    
    src: string | StaticImageData,
    title: string,
    description: string,
  };
};

const Projects = (props: ProjectsProps) => {
  const projects = [
    {
      id: 1,
      src: orderapp,
      title: "Order App",
      description: "É um app para pedidos de comida, onde o usuário pode escolher o prato e a quantidade de pratos que deseja. O app também possui um sistema de carrinho de compras.",
    },
    {
      id: 2,
      src: nlw,
      title: "Next Level Week - eSports",
      description: "É um projeto desenvolvido durante a Next Level Week da Rocketseat com ReactJS, TypeScript e SQLite, onde o usuário pode escolher o jogo que deseja jogar com amigos e criar um anúncio para encontrar outros jogadores.",
    },
  ]
  
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40">
        {projects.map((project, index) => (
          <div key={project.id}>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src={project.src.src} alt="" width={600} height={600} />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Projeto {index + 1} de {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>

                <p className="text-lg text-center md:text-left" >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))};
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
