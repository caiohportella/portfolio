import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
import { HydrationProvider, Client } from "react-hydration-provider";
import { Suspense } from "react";

const Home: NextPage = () => {
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

          <Header />

          <section id="hero" className="snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <Experience />
          </section>

          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects
              projects={{
                id: 0,
                src: "",
                title: "",
                description: "",
              }}
            />
          </section>

          <section id="contact" className="snap-start">
            <Contact name={""} email={""} subject={""} message={""} />
          </section>

          <footer className="sticky bottom-5 w-full">
            <div className="flex items-center justify-center">
                  <motion.img
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
                    src={"/images/react.png"}
                    alt=""
                    className="w-8 h-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                    onClick={() => {
                      window.location.href = "#hero";
                    }}
                  />
            </div>
          </footer>
        </div>
      </Client>
    </HydrationProvider>
  );
};

export default Home;
