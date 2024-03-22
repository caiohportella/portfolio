import { sanityClient } from "../sanity";
import { Course } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'course'] 
`;

export const fetchCourses = async () => {
  const res = await sanityClient.fetch(query);

  const courses: Course[] = res;

  return courses;
};
