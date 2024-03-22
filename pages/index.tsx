import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Experiences from "../components/Experiences";
import { motion } from "framer-motion";
import { HydrationProvider, Client } from "react-hydration-provider";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperience";
import {
  Course,
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../typings";
import { fetchCourses } from "../utils/fetchCourses";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  courses: Course[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  experiences,
  courses,
  skills,
  projects,
  socials,
}: Props) => {
  return (
    <HydrationProvider>
      <Suspense fallback={<div>Loading...</div>}> </Suspense>
      <Client>
        <div
          className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40"
        >
          <Head>
            <title>Portfolio</title>
            <link rel="icon" href="/react.ico" />
          </Head>

          <Header socials={socials} />

          <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>

          <section id="experience" className="snap-center">
            <Experiences experiences={experiences} />
          </section>

          <section id="courses" className="snap-center">
            <Courses courses={courses} />
          </section>

          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>

          <section id="projects" className="snap-start">
            <Projects projects={projects} />
          </section>

          <section id="contact" className="snap-start">
            <Contact name={""} email={""} subject={""} message={""} />
          </section>

          <Link href={"#hero"}>
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                  }}
                  className="h-8 w-8 rounded-full flex items-center justify-center"
                >
                  <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-[#F7AB0A] animate-pulse" />
                </motion.div>
              </div>
            </footer>
          </Link>
        </div>
      </Client>
    </HydrationProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const courses: Course[] = await fetchCourses();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      courses,
      skills,
      projects,
      socials,
    },
    revalidate: 60,
  };
};
