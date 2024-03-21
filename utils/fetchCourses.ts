import { Course } from "../typings";

export const fetchCourses = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCourse`
  );

  const data = await res.json();
  const courses: Course[] = data.courses;

  return courses;
};
