import { motion } from "framer-motion";
import ExperiencesCard from "./ExperiencesCard";
import { Experience as ExperienceType } from "../typings";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type Props = {
  experiences: ExperienceType[];
};

const Experience = ({ experiences }: Props) => {
  const t = useTranslations("Experience");

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
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("heading")}
      </h3>

      <div className="flex justify-between space-x-5 items-center w-full overflow-hidden p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40 select-none">
        {experiences?.map((experience) => (
          <ExperiencesCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
