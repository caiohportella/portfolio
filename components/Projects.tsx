/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Project as ProjectType } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40">
        {projects.map((project, index) => (
          <div key={project._id}>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                width={600}
                height={600}
                className="h-28 xl:h-80 md:h-72 object-contain"
              />
              <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Projeto {index + 1} de {projects.length}:
                  </span>{" "}
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
                </div>

                <p className="text-sm md:text-md lg:text-lg text-justify md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
