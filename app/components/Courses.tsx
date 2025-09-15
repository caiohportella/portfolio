"use client";

import { motion } from "framer-motion";
import CoursesCard from "./CoursesCard";
import { Course as CourseType } from "../../typings";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type Props = {
  courses: CourseType[];
};

const Courses = ({ courses }: Props) => {
  const t = useTranslations("Courses");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // Increase sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
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
        {t("heading")}
      </h3>

      <div
        className="w-screen md:w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {courses?.map((course) => (
          <motion.div
            key={course._id}
            className="w-screen snap-center flex space-y-5 items-center justify-center p-20 h-screen select-none"
            animate={{ scale: isDragging ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <CoursesCard key={course._id} course={course} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
