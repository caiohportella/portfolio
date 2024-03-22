import { motion } from "framer-motion";
import CoursesCard from "./CoursesCard";
import { Course as CourseType } from "../typings";

type Props = {
  courses: CourseType[];
};

const Courses = ({ courses }: Props) => {
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
        Cursos
      </h3>

      <div className="w-screen md:w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/40">
        {courses?.map((course) => (
          <CoursesCard key={course._id} course={course} />
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
