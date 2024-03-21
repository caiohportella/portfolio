import { motion } from "framer-motion";
import React from "react";
import { PageInfo as PageInfoType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfoType;
}

const About = ({ pageInfo }: Props) => {

  return (
    //@ts-ignore
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

      {/* @ts-ignore */}
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
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Caio Portella"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Conheça{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            um pouco mais
          </span>{" "}
          sobre mim
        </h4>
        <p className="text-base max-h-fit">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;