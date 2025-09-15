"use client";

import { Skill as SkillType } from "../../typings";
import { urlFor } from "../../sanity";
import { motion } from "framer-motion";

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
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
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default Skill;
