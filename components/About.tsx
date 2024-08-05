import { motion } from "framer-motion";
import React from "react";
import { PageInfo as PageInfoType } from "../typings";
import { urlFor } from "../sanity";
import { useTranslations } from "next-intl";

type Props = {
  pageInfo: PageInfoType;
}

const About = ({ pageInfo }: Props) => {

  const t = useTranslations("About");

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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        {t("heading")}
      </h3>

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
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Caio Portella"
        className="-mb-24 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          {t("titleStart")}
          <span className="underline decoration-[#F7AB0A]/50">
            {t("titleHighlight")}
          </span>{" "}
          {t("titleEnd")}
        </h4>
        <p className="text-sm md:text-lg max-h-fit">
          {/* {pageInfo?.backgroundInformation} */}
          {t("about")}
        </p>
      </div>
    </motion.div>
  );
};

export default About;