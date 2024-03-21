/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Project as ProjectType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40">
        {projects.map((project, index) => (
          <div key={project._id}>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img
                src={urlFor(project?.image).url()}
                alt=""
                width={600}
                height={600}
                className="h-28 xl:h-80 md:h-72 object-contain"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Projeto {index + 1} de {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-10 w-10 rounded-full object-cover"
                      src={urlFor(technology?.image).url()}
                      alt=""
                    />
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
