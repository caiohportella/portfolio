

// Tipos importados de typings.d.ts
import {
  Course,
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../../typings";

// Funções de fetch que você já tem
import { fetchCourses } from "../../utils/fetchCourses";
import { fetchExperiences } from "../../utils/fetchExperience";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";
import { getTranslations } from "next-intl/server";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import About from "../components/About";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";

// A página agora é uma função assíncrona!
export default async function Home() {
  // Busca os dados diretamente aqui
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const courses: Course[] = await fetchCourses();

  const t = await getTranslations("Index");

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experiences" className="snap-center">
        <Experiences experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="courses" className="snap-start">
        <Courses courses={courses} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
