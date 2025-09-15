"use client";

import React, { useRef, useState } from "react";
import { Project as ProjectType } from "../../typings";
import { urlFor } from "../../sanity";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  const t = useTranslations("Projects");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const locale = useLocale();

  const getLocalizedSummary = (project: ProjectType) => {
    return locale === "en-US" ? project.summaryEN : project.summaryPT;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault(); // Prevent default browser behavior
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl select-none">
        {t("heading")}
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40 select-none"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen select-none"
            initial={{ scale: 0.9 }}
            animate={{ scale: isDragging ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              width={600}
              height={600}
              className="h-28 xl:h-80 md:h-72 object-contain select-none"
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl select-none">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center select-none">
                <span className="underline decoration-[#F7AB0A]/50 select-none">
                  {t("project")} {index + 1} {t("of")} {projects.length}:
                </span>{" "}
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none"
                >
                  {project.title}
                </a>
              </h4>

              <div className="flex items-center space-x-2 justify-center select-none">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover select-none"
                    src={urlFor(technology?.image).url()}
                    alt=""
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className="text-sm md:text-md lg:text-lg text-justify md:text-left select-none">
                {getLocalizedSummary(project)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 select-none" />
    </motion.div>
  );
};

export default Projects;
