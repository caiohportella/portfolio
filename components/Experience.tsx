import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  img?: string;
};

let count: number = 0;

const Experience = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextClickHandler = () => {
    count = (count + 1) % 3;
    setCurrentSlide(count);
  };

  const prevClickHandler = () => {
    count = (currentSlide - 1) % 3;
    setCurrentSlide(count);
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
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiência
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40">
        <ExperienceCard
          src={"/images/usp.jpg"}
          title={"Introdução à Ciência da Computação com Python"}
          emissor={"Universidade de São Paulo"}
          description={"Ensinamento de Python para iniciantes"}
          date={"Fev 2020 - Mar 2020"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"Web Programming with Python"}
          emissor={"Udemy"}
          description={"Fundamentos de programação web com Python"}
          date={"Mar 2020 - Abr 2020"}
        />
        <ExperienceCard
          src={"/images/cca.jpg"}
          title={"Java Qualification Level 1"}
          emissor={"Cambridge Certification Authority"}
          description={"Certificação de nível básico em Java"}
          date={"Jul 2020 - Jul 2020"}
        />
        <ExperienceCard
          src={"/images/cca.jpg"}
          title={"Java Qualification Level 1"}
          emissor={"Cambridge Certification Authority"}
          description={"Certificação de nível avançado em Java"}
          date={"Jul 2020 - Jul 2020"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"Web Developer Bootcamp"}
          emissor={"Udemy"}
          description={"Bootcamp de desenvolvimento web"}
          date={"Jul 2020 - Ago 2020"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"The Complete Android Oreo Course"}
          emissor={"Udemy"}
          description={"Curso de desenvolvimento Android"}
          date={"Jul 2021 - Ago 2021"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"React - The Complete Course Guide"}
          emissor={"Udemy"}
          description={"Curso de desenvolvimento React"}
          date={"Ago 2022 - Jul 2023"}
        />
        <ExperienceCard
          src={"/images/rocketseat.png"}
          title={"Next emissor Week - eSports"}
          emissor={"Udemy"}
          description={"Semana intensiva de programação utilizando ReactJS e React Native"}
          date={"Set 2022 - Set 2022"}
        />
        <ExperienceCard
          src={"/images/dio.png"}
          title={"Santander Bootcamp 2023 - Mobile com Flutter"}
          emissor={"Digital Innovation One"}
          description={"Bootcamp de desenvolvimento mobile com Flutter e Dart em parceria com o Santander"}
          date={"Ago 2023 - Out 2023"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"Flutter & Dart - The Complete Guide"}
          emissor={"Udemy"}
          description={"Curso de desenvolvimento Flutter e Dart"}
          date={"Set 2023 - Nov 2023"}
        />
        <ExperienceCard
          src={"/images/udemy.png"}
          title={"React & Typescript - The Practical Guide"}
          emissor={"Udemy"}
          description={"Aperfeiçoamento de desenvolvimento React com Typescript"}
          date={"Out 2023 - Nov 2023"}
        />
      </div>
    </motion.div>
  );
};

export default Experience;
