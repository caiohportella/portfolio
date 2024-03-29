import React from "react";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
// import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border-2 border-darkGreen object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-10 lg:h-10 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-ou"
        alt=""
        width={100}
        height={100}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-10 lg:h-10 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
