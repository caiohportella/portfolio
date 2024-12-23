import { motion } from "framer-motion";
import React from "react";
import { Course as CourseType } from "../typings";
import { urlFor } from "../sanity";
import { formatCourseDate } from "../utils/formatDate";

type Props = {
  course: CourseType;
};

const CoursesCard = ({ course }: Props) => {
  return (
    <motion.div className="flex flex-col drop-shadow-md rounded-lg items-center space-y-7 flex-shrink-0 w-96 md:w-[600px] xl:w[900px] mb-2 object-cover object-center snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        src={urlFor(course?.institutionImage).url()}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="w-full px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {course?.courseTitle}
        </h4>
        <p className="font-bold text-md md:text-2xl mt-1">
          {course?.institution}
        </p>
        <p className="uppercase py-5 text-gray-300">
          {formatCourseDate(course?.dateStarted)} -{" "}
          {formatCourseDate(course?.dateEnded)}
        </p>
      </div>
    </motion.div>
  );
};

export default CoursesCard;
