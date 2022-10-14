import { motion } from "framer-motion";
import React from "react";

type Props = {
  src?: string | undefined;
  emissor?: string;
  level?: string;
  description?: string;
  date?: string;
};

const ExperienceCard = (props: Props) => {
  return (
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100">
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
          src={props.src}
          alt=""
          className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{props.emissor}</h4>
          <p className="font-bold text-2xl mt-1">{props.level}</p>
          <p className="uppercase py-5 text-gray-300">{props.date}</p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>{props.description}</li>
          </ul>
        </div>
      </article>
  );
};

export default ExperienceCard;
