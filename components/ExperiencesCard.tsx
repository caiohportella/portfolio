import { motion } from "framer-motion";
import React from "react";
import { Experience as ExperienceType } from "../typings";
import { urlFor } from "../sanity";
import formatDate from "../utils/formatDate";

type Props = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col mx-auto rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(experience?.companyImage).url()}
        alt=""
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="md:px-10">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.location}</p>
        <p className="uppercase py-5 text-gray-300">
          {formatDate(experience?.dateStarted)} -{" "}
          {formatDate(experience?.dateEnded)}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>{experience?.jobTitle}</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
