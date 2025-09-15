export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Course } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'course'] 
`;
  const courses: Course[] = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ courses }));
}
