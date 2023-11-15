import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>
      <h3 className="absolute top-36 ippercase tracking-[3px] text-gray-500 text-sm">
        Passe o mouse por cima de uma habilidade
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill level="80%" img="/images/js.png" />
        <Skill level="80%" img="/images/typescript.png" />
        <Skill level="80%" img="/images/html.png" />
        <Skill level="50%" img="/images/css.png" />
        <Skill level="80%" img="/images/bootstrap.png" />
        <Skill level="65%" img="/images/react.png" />
        <Skill level="55%" img="/images/tailwind2.png" />
        <Skill level="80%" img="/images/java.jpg" />
        <Skill level="50%" img="/images/kotlin.png" />
        <Skill level="80%" img="/images/c.png" />
        <Skill level="80%" img="/images/csharp.png" />
        <Skill level="50%" img="/images/mysql.png" />
        <Skill level="80%" img="/images/python.png" />
        <Skill level="65%" img="/images/git.png" />
        <Skill level="80%" img="/images/github.png" />
        <Skill level="50%" img="/images/golang.png" />
        <Skill level="75%" img="/images/flutter.png" />
        <Skill level="75%" img="/images/dart.png" />
      </div>
    </motion.div>
  );
};

export default Skills;
