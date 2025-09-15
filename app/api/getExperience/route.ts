export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Experience } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;
  const experiences: Experience[] = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ experiences }));
}
