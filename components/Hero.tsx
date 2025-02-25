import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { PageInfo as PageInfoType } from "../typings";
import { urlFor } from "../sanity";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

type Props = {
  pageInfo: PageInfoType;
};

const Hero = ({ pageInfo }: Props) => {
  const t = useTranslations("Hero");
  const { locale } = useRouter();

  const [text] = useTypewriter({
    words: [`${pageInfo?.name}`, t("developerFullstack"), t("developerMobile")],
    loop: true,
    delaySpeed: 2000,
  });

  const curriculumPath = locale === "en-US" ? "/en-US/Vitae.pdf" : "/Curriculum.pdf";

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 2,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile pic"
        className="h-32 w-32 rounded-full object-cover relative mx-auto"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {t("role")}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">{t("about")}</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">{t("experience")}</button>
          </Link>

          <Link href="#courses">
            <button className="heroButton">{t("courses")}</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">{t("skills")}</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">{t("projects")}</button>
          </Link>

          <Link
            href={curriculumPath}
            locale={false}
            download={locale === "en-US" ? "Vitae.pdf" : "Curriculum.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="heroButton">{t("downloadCV")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
