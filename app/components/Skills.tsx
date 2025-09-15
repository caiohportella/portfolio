"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typings";
import { useTranslations } from "next-intl";

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  const t = useTranslations("Skills");

  return (
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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("heading")}
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm">
        Interaja com uma habilidade
      </h3> */}

      <div className="justify-center grid grid-cols-6 gap-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 sm:gap-1 md:gap-3 lg:gap-6 xl:gap-7 2xl:gap-8 2xl:pt-28">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;