"use client";

import { motion } from "framer-motion";
import ExperiencesCard from "./ExperiencesCard";
import { Experience as ExperienceType } from "../../typings";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type Props = {
  experiences: ExperienceType[];
};

const Experiences = ({ experiences }: Props) => {
  const t = useTranslations("Experience");
  const divRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (divRef.current?.offsetLeft || 0));
    setScrollLeft(divRef.current?.scrollLeft || 0);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (divRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // The multiplier can be adjusted for scroll speed
    if (divRef.current) {
      divRef.current.scrollLeft = scrollLeft - walk;
    }
  };

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

      <div
        ref={divRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex justify-between space-x-5 items-center w-full overflow-x-scroll p-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {experiences?.map((experience) => (
          <ExperiencesCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
